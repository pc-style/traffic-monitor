import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const createMessage = mutation({
  args: {
    category: v.union(v.literal("remind"), v.literal("tell"), v.literal("wish"), v.literal("gentle")),
    title: v.string(),
    content: v.string(),
    photoId: v.optional(v.id("_storage")),
    priority: v.optional(v.union(v.literal("low"), v.literal("medium"), v.literal("high"))),
    targetDate: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");
    
    // Get current profile to find partner
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    
    if (!profile?.partnerId) {
      throw new Error("No partner linked");
    }
    
    const messageId = await ctx.db.insert("messages", {
      authorId: userId,
      recipientId: profile.partnerId,
      category: args.category,
      title: args.title,
      content: args.content,
      photoId: args.photoId,
      status: "pending",
      priority: args.priority,
      targetDate: args.targetDate,
    });
    
    // Update stats
    const stats = await ctx.db
      .query("stats")
      .withIndex("by_user", (q) => q.eq("userId", profile.partnerId!))
      .first();
    
    if (stats) {
      await ctx.db.patch(stats._id, {
        messagesTotal: stats.messagesTotal + 1,
        ...(args.category === "remind" && { tasksTotal: stats.tasksTotal + 1 }),
        ...(args.category === "wish" && { wishesTotal: stats.wishesTotal + 1 }),
        lastUpdated: Date.now(),
      });
    }
    
    return messageId;
  },
});

export const getMessages = query({
  args: {
    category: v.optional(v.union(v.literal("remind"), v.literal("tell"), v.literal("wish"), v.literal("gentle"))),
    status: v.optional(v.union(v.literal("pending"), v.literal("acknowledged"), v.literal("completed"), v.literal("planned"), v.literal("fulfilled"), v.literal("noted"))),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];
    
    const messages = await ctx.db
      .query("messages")
      .withIndex("by_recipient", (q) => q.eq("recipientId", userId))
      .order("desc")
      .collect();
    
    // Filter by category and status if needed
    return messages.filter(msg => {
      if (args.category && msg.category !== args.category) return false;
      if (args.status && msg.status !== args.status) return false;
      return true;
    });
  },
});

export const getSentMessages = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];
    
    return await ctx.db
      .query("messages")
      .withIndex("by_author", (q) => q.eq("authorId", userId))
      .order("desc")
      .collect();
  },
});

export const acknowledgeMessage = mutation({
  args: {
    messageId: v.id("messages"),
    supportiveResponse: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");
    
    const message = await ctx.db.get(args.messageId);
    if (!message || message.recipientId !== userId) {
      throw new Error("Message not found");
    }
    
    await ctx.db.patch(args.messageId, {
      status: "acknowledged",
      acknowledgedAt: Date.now(),
      ...(args.supportiveResponse && { supportiveResponse: args.supportiveResponse }),
    });
    
    // Update stats
    const stats = await ctx.db
      .query("stats")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    
    if (stats) {
      await ctx.db.patch(stats._id, {
        messagesAcknowledged: stats.messagesAcknowledged + 1,
        ...(message.category === "gentle" && { gentleRequestsHandled: stats.gentleRequestsHandled + 1 }),
        lastUpdated: Date.now(),
      });
    }
    
    return { success: true };
  },
});

export const completeTask = mutation({
  args: {
    messageId: v.id("messages"),
    completionPhotoId: v.optional(v.id("_storage")),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");
    
    const message = await ctx.db.get(args.messageId);
    if (!message || message.recipientId !== userId || message.category !== "remind") {
      throw new Error("Task not found");
    }
    
    await ctx.db.patch(args.messageId, {
      status: "completed",
      completedAt: Date.now(),
      completionPhotoId: args.completionPhotoId,
    });
    
    // Update stats and streak
    const stats = await ctx.db
      .query("stats")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    
    if (stats) {
      const newStreak = stats.currentStreak + 1;
      await ctx.db.patch(stats._id, {
        tasksCompleted: stats.tasksCompleted + 1,
        currentStreak: newStreak,
        longestStreak: Math.max(stats.longestStreak, newStreak),
        lastUpdated: Date.now(),
      });
    }
    
    return { success: true };
  },
});

export const updateWishStatus = mutation({
  args: {
    messageId: v.id("messages"),
    status: v.union(v.literal("noted"), v.literal("planned"), v.literal("fulfilled")),
    targetDate: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");
    
    const message = await ctx.db.get(args.messageId);
    if (!message || message.recipientId !== userId || message.category !== "wish") {
      throw new Error("Wish not found");
    }
    
    await ctx.db.patch(args.messageId, {
      status: args.status as "noted" | "planned" | "fulfilled",
      targetDate: args.targetDate,
      ...(args.status === "fulfilled" && { completedAt: Date.now() }),
    });
    
    // Update stats
    if (args.status === "fulfilled") {
      const stats = await ctx.db
        .query("stats")
        .withIndex("by_user", (q) => q.eq("userId", userId))
        .first();
      
      if (stats) {
        await ctx.db.patch(stats._id, {
          wishesFulfilled: stats.wishesFulfilled + 1,
          lastUpdated: Date.now(),
        });
      }
    }
    
    return { success: true };
  },
});

export const markReflected = mutation({
  args: {
    messageId: v.id("messages"),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");
    
    const message = await ctx.db.get(args.messageId);
    if (!message || message.recipientId !== userId || message.category !== "tell") {
      throw new Error("Message not found");
    }
    
    await ctx.db.patch(args.messageId, {
      reflectedAt: Date.now(),
    });
    
    return { success: true };
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});
