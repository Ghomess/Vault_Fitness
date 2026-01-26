import { v } from "convex/values";
import { ExerciseData, validateExercise } from "../utils/exerciseValidators";

import { requireUser, requireRole, requireGym } from "../utils/guards";
import { mutation } from "../_generated/server";

export const createWorkout = mutation({
  args: {
    title: v.string(),
    exercises: v.array(ExerciseData),
  },
  handler: async (ctx, { title, exercises }) => {
    const user = await requireUser(ctx);
    requireRole(user, ["staff"]);
    const gymId = requireGym(user);

    for (const exercise of exercises) {
      validateExercise(exercise);
    }

    return await ctx.db.insert("workouts", {
      title,
      exercises,
      gymId,
      createdAt: Date.now(),
    });
  },
});
