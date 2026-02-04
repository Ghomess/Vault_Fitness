import { makeFunctionReference } from "convex/server";
import { convex } from "./client";

export const convexQuery = async <TArgs extends object, TResult>(
  name: string,
  args: TArgs,
): Promise<TResult> => {
  const fn = makeFunctionReference<"query">(name);
  return convex.query(fn, args) as Promise<TResult>;
};
