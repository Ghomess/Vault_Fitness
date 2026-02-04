import {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  AuthContextValue,
  AuthStatus,
  AuthUser,
} from "../services/auth/authType";
import { storage } from "../services/mmkv/mmkv";
import { authProvider } from "../services/auth/authProvider";

import { Alert } from "react-native";
import { getCurrentUser } from "../services/convex/users/users";

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const stored = storage.getString("auth_user");

    if (stored) {
      setUser(JSON.parse(stored));
      setStatus("authenticated");
    } else {
      setStatus("unauthenticated");
    }
  }, []);

  const login = async (email: string, password: string) => {
    setStatus("loading");

    // DEV auth stub
    await authProvider.login(email, password);

    console.log("Fetching...");

    const authUser = await getCurrentUser();
    console.log("Fetched");
    if (!authUser) {
      setStatus("unauthenticated");
      Alert.alert(
        "Error",
        "Invalid email or password.",
        [
          {
            text: "OK",
          },
        ],
        {
          cancelable: true,
        },
      );
      return;
    }

    setUser(authUser);
    setStatus("authenticated");
    storage.set("auth_user", JSON.stringify(authUser));
  };

  const logout = () => {
    setUser(null);
    setStatus("unauthenticated");
    storage.remove("auth_user");
  };

  const value = useMemo(
    () => ({ user, status, login, logout }),
    [user, status],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
