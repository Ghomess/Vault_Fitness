import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { ExerciseData } from "./utils/exerciseValidators";

export default defineSchema({
  users: defineTable({
    authId: v.string(),
    email: v.string(),
    role: v.union(v.literal("member"), v.literal("staff"), v.literal("admin")),
    gymId: v.id("gyms"),
    createdAt: v.number(),
  })
    .index("by_authId", ["authId"])
    .index("by_gym", ["gymId"]),

  gyms: defineTable({
    name: v.string(),
    location: v.string(),
    createdAt: v.number(),
  }),

  accessHistory: defineTable({
    userId: v.id("users"),
    gymId: v.id("gyms"),
    action: v.union(v.literal("check_in"), v.literal("check_out")),
    timestamp: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_gym", ["gymId"]),

  workouts: defineTable({
    title: v.string(),
    exercises: v.array(ExerciseData),
    gymId: v.id("gyms"),
    createdAt: v.number(),
  }).index("by_gym", ["gymId"]),
});
