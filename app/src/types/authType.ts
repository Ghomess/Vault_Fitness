export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export type Role = "member" | "staff" | "admin";

export const roleRank: Record<Role, number> = {
  member: 1,
  staff: 2,
  admin: 3,
};

export type AuthUser = {
  id: string; // Convex user _id
  authId: string; // identity.subject
  role: Role;
  gymId?: string;
  email: string;
};

export type AuthState = {
  status: AuthStatus;
  user: AuthUser | null;
};

export type AuthContextValue = AuthState & {
  login: (email: string, password: string) => void;
  logout: () => void;
};
