export type AuthState = {
  status: "loading" | "authenticated" | "unauthenticated";
  user: {
    id: string;
    role: "member" | "staff" | "admin";
    gymId?: string;
  } | null;
};

export type AuthContextValue = AuthState & {
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  hydrate: () => Promise<void>;
};

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export type AuthUser = {
  id: string; // Convex user _id
  authId: string; // identity.subject
  role: "member" | "staff" | "admin";
  gymId?: string;
  email: string;
};
