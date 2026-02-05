import { useAuth } from "./useAuth";
import { useAppNavigation } from "./useAppNavigation";
import { canAccess } from "../services/auth/permissions";
import { Role } from "../types/authType";
import { useTranslation } from "./useLanguage";
import { showNotAuthorizedAlert } from "../utils/alerts";

export const useRoleNavigation = () => {
  const navigation = useAppNavigation();
  const { user } = useAuth();
  const { t } = useTranslation();

  const roleNavigate = (screen: "Staff" | "Admin", minRole: Role) => {
    if (!canAccess(user?.role, minRole)) {
      showNotAuthorizedAlert(t);
      return;
    }
    navigation.navigate(screen);
  };

  const roleGoBack = () => {
    if (navigation.canGoBack()) {
      console.log("going back");
      navigation.goBack();
      return;
    }

    if (user?.role) {
      console.log("going home");
      navigation.navigate("Home");
      return;
    }
  };

  return { roleNavigate, roleGoBack };
};
