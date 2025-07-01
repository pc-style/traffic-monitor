import { query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getStats = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;
    
    const stats = await ctx.db
      .query("stats")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    
    return stats;
  },
});

export const getDashboardData = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;
    
    // Get pending messages by category
    const pendingTasks = await ctx.db
      .query("messages")
      .withIndex("by_recipient", (q) => q.eq("recipientId", userId))
      .filter((q) => q.and(q.eq(q.field("category"), "remind"), q.eq(q.field("status"), "pending")))
      .collect();
    
    const pendingFeedback = await ctx.db
      .query("messages")
      .withIndex("by_recipient", (q) => q.eq("recipientId", userId))
      .filter((q) => q.and(q.eq(q.field("category"), "tell"), q.eq(q.field("status"), "pending")))
      .collect();
    
    const pendingWishes = await ctx.db
      .query("messages")
      .withIndex("by_recipient", (q) => q.eq("recipientId", userId))
      .filter((q) => q.and(q.eq(q.field("category"), "wish"), q.eq(q.field("status"), "pending")))
      .collect();
    
    const pendingGentle = await ctx.db
      .query("messages")
      .withIndex("by_recipient", (q) => q.eq("recipientId", userId))
      .filter((q) => q.and(q.eq(q.field("category"), "gentle"), q.eq(q.field("status"), "pending")))
      .collect();
    
    // Get recent activity
    const recentMessages = await ctx.db
      .query("messages")
      .withIndex("by_recipient", (q) => q.eq("recipientId", userId))
      .order("desc")
      .take(10);
    
    const stats = await ctx.db
      .query("stats")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    
    return {
      pendingCounts: {
        tasks: pendingTasks.length,
        feedback: pendingFeedback.length,
        wishes: pendingWishes.length,
        gentle: pendingGentle.length,
      },
      recentMessages,
      stats,
    };
  },
});
