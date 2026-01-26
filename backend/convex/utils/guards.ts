import { QueryCtx, MutationCtx } from "../_generated/server";
import { Doc } from "../_generated/dataModel";

type Ctx = QueryCtx | MutationCtx;

export async function requireAuth(ctx: Ctx) {
  const identity = await ctx.auth.getUserIdentity();

  if (!identity) throw new Error("Unauthenticated");
  return identity;
}

export async function requireUser(ctx: Ctx): Promise<Doc<"users">> {
  const identity = await requireAuth(ctx);

  const user = await ctx.db
    .query("users")
    .withIndex("by_authId", (q) =>
      q.eq("authId", identity.subject ?? "test-auth-123"),
    ) //! ?? "test-auth-123" is a DEV-ONLY fallback. Remove before production.
    .unique();

  if (!user) throw new Error("User not found");

  return user;
}

export function requireRole(
  user: Doc<"users">,
  allowed: Array<Doc<"users">["role"]>,
) {
  if (!allowed.includes(user.role)) {
    throw new Error("Forbidden");
  }
}

export function requireGym(user: Doc<"users">) {
  if (!user.gymId) {
    throw new Error("User has no gym");
  }
  return user.gymId;
}
