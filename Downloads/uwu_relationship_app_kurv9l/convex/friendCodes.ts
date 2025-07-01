import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

// Generate a random 6-character friend code
function generateFriendCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export const generateCode = mutation({
  args: {
    inviteeName: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");
    
    // Check if user is an owner
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    
    if (!profile || profile.role !== "owner") {
      throw new Error("Only owners can generate friend codes");
    }
    
    // Generate unique code
    let code: string;
    let attempts = 0;
    do {
      code = generateFriendCode();
      const existing = await ctx.db
        .query("friendCodes")
        .withIndex("by_code", (q) => q.eq("code", code))
        .first();
      
      if (!existing) break;
      attempts++;
    } while (attempts < 10);
    
    if (attempts >= 10) {
      throw new Error("Failed to generate unique code");
    }
    
    // Create friend code (expires in 7 days)
    const expiresAt = Date.now() + (7 * 24 * 60 * 60 * 1000);
    
    const codeId = await ctx.db.insert("friendCodes", {
      code,
      createdBy: userId,
      inviteeName: args.inviteeName,
      isUsed: false,
      expiresAt,
    });
    
    return { code, expiresAt };
  },
});

export const validateCode = query({
  args: {
    code: v.string(),
  },
  handler: async (ctx, args) => {
    const friendCode = await ctx.db
      .query("friendCodes")
      .withIndex("by_code", (q) => q.eq("code", args.code.toUpperCase()))
      .first();
    
    if (!friendCode) {
      return { valid: false, error: "Invalid friend code" };
    }
    
    if (friendCode.isUsed) {
      return { valid: false, error: "This code has already been used" };
    }
    
    if (friendCode.expiresAt < Date.now()) {
      return { valid: false, error: "This code has expired" };
    }
    
    return { 
      valid: true, 
      inviteeName: friendCode.inviteeName,
      createdBy: friendCode.createdBy 
    };
  },
});

export const useCode = mutation({
  args: {
    code: v.string(),
    displayName: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");
    
    // Check if user already has a profile
    const existingProfile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    
    if (existingProfile) {
      throw new Error("You already have a profile");
    }
    
    const friendCode = await ctx.db
      .query("friendCodes")
      .withIndex("by_code", (q) => q.eq("code", args.code.toUpperCase()))
      .first();
    
    if (!friendCode) {
      throw new Error("Invalid friend code");
    }
    
    if (friendCode.isUsed) {
      throw new Error("This code has already been used");
    }
    
    if (friendCode.expiresAt < Date.now()) {
      throw new Error("This code has expired");
    }
    
    // Mark code as used
    await ctx.db.patch(friendCode._id, {
      isUsed: true,
      usedBy: userId,
    });
    
    // Create user profile
    const profileId = await ctx.db.insert("profiles", {
      userId,
      role: "user", // invited users are always "user" role
      displayName: args.displayName,
      partnerId: friendCode.createdBy,
    });
    
    // Update owner's profile to link back
    const ownerProfile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", friendCode.createdBy))
      .first();
    
    if (ownerProfile) {
      await ctx.db.patch(ownerProfile._id, {
        partnerId: userId,
      });
    }
    
    // Initialize stats for both users
    await ctx.db.insert("stats", {
      userId,
      partnerId: friendCode.createdBy,
      tasksCompleted: 0,
      tasksTotal: 0,
      currentStreak: 0,
      longestStreak: 0,
      avgResponseTime: 0,
      messagesAcknowledged: 0,
      messagesTotal: 0,
      wishesFulfilled: 0,
      wishesTotal: 0,
      gentleRequestsHandled: 0,
      lastUpdated: Date.now(),
    });
    
    // Update owner's stats if they don't exist
    const ownerStats = await ctx.db
      .query("stats")
      .withIndex("by_user", (q) => q.eq("userId", friendCode.createdBy))
      .first();
    
    if (!ownerStats) {
      await ctx.db.insert("stats", {
        userId: friendCode.createdBy,
        partnerId: userId,
        tasksCompleted: 0,
        tasksTotal: 0,
        currentStreak: 0,
        longestStreak: 0,
        avgResponseTime: 0,
        messagesAcknowledged: 0,
        messagesTotal: 0,
        wishesFulfilled: 0,
        wishesTotal: 0,
        gentleRequestsHandled: 0,
        lastUpdated: Date.now(),
      });
    } else {
      await ctx.db.patch(ownerStats._id, {
        partnerId: userId,
      });
    }
    
    return profileId;
  },
});

export const getMyCodes = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];
    
    const codes = await ctx.db
      .query("friendCodes")
      .withIndex("by_creator", (q) => q.eq("createdBy", userId))
      .order("desc")
      .collect();
    
    return codes;
  },
});
