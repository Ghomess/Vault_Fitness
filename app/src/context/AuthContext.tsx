import { createContext, PropsWithChildren, useEffect, useState } from "react";
import {
  AuthContextValue,
  AuthStatus,
  AuthUser,
} from "../services/auth/authType";
import { storage } from "../services/mmkv/mmkv";

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const authUser = storage.getString("auth_user");
    if (typeof authUser === "string") {
      setUser(JSON.parse(authUser));
    }
  }, []);
  storage.set("auth_user", JSON.stringify(user?.authId));

  // reads/writes MMKV
  // calls Convex auth
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
