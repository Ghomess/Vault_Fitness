import { Doc } from "../../../../backend/convex/_generated/dataModel";
import { AuthUser } from "./authType";

export function mapConvexUserToAuthUser(user: Doc<"users">): AuthUser {
  return {
    id: user._id,
    authId: user.authId,
    email: user.email,
    role: user.role,
    gymId: user.gymId,
  };
}
