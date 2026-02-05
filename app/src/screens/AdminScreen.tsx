import { Text, View } from "react-native";
import { useTranslation } from "../hooks/useLanguage";
import { useAuth } from "../hooks/useAuth";
import { canAccess } from "../services/auth/permissions";
import { NotAuthorizedScreen } from "./NotAuthorizedScreen";

export const AdminScreen = () => {
  const { user } = useAuth();
  if (!canAccess(user?.role, "admin")) {
    return <NotAuthorizedScreen />;
  }
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t("admin.title")}</Text>
    </View>
  );
};
