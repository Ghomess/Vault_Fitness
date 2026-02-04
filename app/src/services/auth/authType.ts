export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export type AuthUser = {
  id: string; // Convex user _id
  authId: string; // identity.subject
  role: "member" | "staff" | "admin";
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
