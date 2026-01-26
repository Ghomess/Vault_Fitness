import { v } from "convex/values";

export const ExerciseTypes = v.union(
  v.literal("cardio"),
  v.literal("chest"),
  v.literal("glutes"),
  v.literal("back"),
  v.literal("biceps"),
  v.literal("triceps"),
  v.literal("shoulders"),
  v.literal("forearms"),
  v.literal("quads"),
  v.literal("hamstrings"),
  v.literal("calves"),
  v.literal("abdominals"),
);

export const ExerciseData = v.object({
  name: v.string(),
  type: ExerciseTypes,
  sets: v.optional(v.number()),
  reps: v.optional(v.number()),
  time: v.optional(v.number()),
});

export function validateExercise(exercise: {
  type: string;
  sets?: number;
  reps?: number;
  time?: number;
}) {
  if (exercise.type === "cardio") {
    if (!exercise.time) {
      throw new Error("Cardio exercises require time");
    }
    if (exercise.sets || exercise.reps) {
      throw new Error("Cardio exercises cannot have sets or reps");
    }
  } else {
    if (!exercise.sets || !exercise.reps) {
      throw new Error("Strength exercises require sets and reps");
    }
    if (exercise.time) {
      throw new Error("Strength exercises cannot have time");
    }
  }

  return true;
}
