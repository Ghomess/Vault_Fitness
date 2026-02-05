import { Role, roleRank } from "../../types/authType";

export function canAccess(userRole: Role | null | undefined, minimumRole: Role) {
  if (!userRole) return false;
  return roleRank[userRole] >= roleRank[minimumRole];
}
