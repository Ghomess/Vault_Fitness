import { convexQuery } from "../queries";
import { mapConvexUserToAuthUser } from "../../auth/mapUser";
import type { AuthUser } from "../../auth/authType";
import { Doc } from "../../../../../backend/convex/_generated/dataModel";

export const getCurrentUser = async (): Promise<AuthUser | null> => {
  const devAuthOnly = process.env.EXPO_PUBLIC_DEV_AUTH_ONLY === "true";
  if (devAuthOnly) {
    return {
      id: "dev",
      authId: "dev",
      email: "dev@gomes.com",
      role: "admin",
      gymId: undefined,
    };
  }

  const user = await convexQuery<{}, Doc<"users"> | null>(
    "users:getCurrentUser",
    {},
  );
  return user ? mapConvexUserToAuthUser(user) : null;
};
