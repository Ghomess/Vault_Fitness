import { makeFunctionReference } from "convex/server";
import { convex } from "./client";

export const convexMutation = async <TArgs extends object, TResult>(
  name: string,
  args: TArgs,
): Promise<TResult> => {
  const fn = makeFunctionReference<"mutation">(name);
  return convex.mutation(fn, args) as Promise<TResult>;
};
