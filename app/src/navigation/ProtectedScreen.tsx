import { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import { canAccess } from "../services/auth/permissions";
import { Role } from "../types/authType";
import { NotAuthorizedScreen } from "../screens/NotAuthorizedScreen";

type ProtectedScreenProps = {
  minRole: Role;
  children: ReactNode;
};

export const ProtectedScreen = ({
  minRole,
  children,
}: ProtectedScreenProps) => {
  const { user } = useAuth();
  const allowed = canAccess(user?.role, minRole);

  if (!allowed) {
    return <NotAuthorizedScreen />;
  }
  return <>{children}</>;
};
