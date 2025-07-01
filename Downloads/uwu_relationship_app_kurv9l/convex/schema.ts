import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  // User profiles with relationship roles
  profiles: defineTable({
    userId: v.id("users"),
    role: v.union(v.literal("owner"), v.literal("user")), // owner = boyfriend, user = girlfriend
    displayName: v.string(),
    partnerId: v.optional(v.id("users")), // linked partner
  }).index("by_user", ["userId"]),

  // Friend codes for invitations
  friendCodes: defineTable({
    code: v.string(),
    createdBy: v.id("users"), // owner who created the code
    inviteeName: v.string(), // name of person being invited
    isUsed: v.boolean(),
    usedBy: v.optional(v.id("users")),
    expiresAt: v.number(),
  }).index("by_code", ["code"])
    .index("by_creator", ["createdBy"]),

  // Main messages table for all categories
  messages: defineTable({
    authorId: v.id("users"),
    recipientId: v.id("users"),
    category: v.union(
      v.literal("remind"), 
      v.literal("tell"), 
      v.literal("wish"), 
      v.literal("gentle")
    ),
    title: v.string(),
    content: v.string(),
    photoId: v.optional(v.id("_storage")),
    
    // Status tracking
    status: v.union(
      v.literal("pending"),
      v.literal("acknowledged"), 
      v.literal("completed"),
      v.literal("planned"),
      v.literal("fulfilled"),
      v.literal("noted")
    ),
    
    // Metadata
    priority: v.optional(v.union(v.literal("low"), v.literal("medium"), v.literal("high"))),
    targetDate: v.optional(v.number()),
    completedAt: v.optional(v.number()),
    acknowledgedAt: v.optional(v.number()),
    
    // For tasks - completion tracking
    completionPhotoId: v.optional(v.id("_storage")),
    streak: v.optional(v.number()),
    
    // For feedback - reflection tracking
    reflectedAt: v.optional(v.number()),
    
    // For gentle requests - supportive response
    supportiveResponse: v.optional(v.string()),
  })
    .index("by_recipient", ["recipientId"])
    .index("by_author", ["authorId"])
    .index("by_category", ["category"])
    .index("by_status", ["status"]),

  // Follow-up discussions/threads
  replies: defineTable({
    messageId: v.id("messages"),
    authorId: v.id("users"),
    content: v.string(),
    photoId: v.optional(v.id("_storage")),
  }).index("by_message", ["messageId"]),

  // Relationship stats and insights
  stats: defineTable({
    userId: v.id("users"),
    partnerId: v.id("users"),
    
    // Completion metrics
    tasksCompleted: v.number(),
    tasksTotal: v.number(),
    currentStreak: v.number(),
    longestStreak: v.number(),
    
    // Response metrics
    avgResponseTime: v.number(), // in hours
    messagesAcknowledged: v.number(),
    messagesTotal: v.number(),
    
    // Relationship insights
    wishesFulfilled: v.number(),
    wishesTotal: v.number(),
    gentleRequestsHandled: v.number(),
    
    lastUpdated: v.number(),
  }).index("by_user", ["userId"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
