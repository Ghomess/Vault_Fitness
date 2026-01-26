import { query } from "../_generated/server";
import { requireUser } from "../utils/guards";

export const getAccessHistory = query({
  handler: async (ctx) => {
    const user = await requireUser(ctx);

    if (user.role === "member") {
      return ctx.db
        .query("accessHistory")
        .withIndex("by_user", (q) => q.eq("userId", user._id))
        .collect();
    }

    return ctx.db
      .query("accessHistory")
      .withIndex("by_gym", (q) => q.eq("gymId", user.gymId!))
      .collect();
  },
});
