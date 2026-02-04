/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as functions_accessHistory from "../functions/accessHistory.js";
import type * as functions_users from "../functions/users.js";
import type * as functions_workouts from "../functions/workouts.js";
import type * as types from "../types.js";
import type * as users from "../users.js";
import type * as utils_exerciseValidators from "../utils/exerciseValidators.js";
import type * as utils_guards from "../utils/guards.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  "functions/accessHistory": typeof functions_accessHistory;
  "functions/users": typeof functions_users;
  "functions/workouts": typeof functions_workouts;
  types: typeof types;
  users: typeof users;
  "utils/exerciseValidators": typeof utils_exerciseValidators;
  "utils/guards": typeof utils_guards;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
