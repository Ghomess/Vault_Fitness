export interface Exercise {
  name: string;
  type:
    | "cardio"
    | "chest"
    | "glutes"
    | "back"
    | "biceps"
    | "triceps"
    | "shoulders"
    | "forearms"
    | "quads"
    | "hamstrings"
    | "calves"
    | "abdominals";
  sets: number;
  reps?: number;
  time?: number;
}
