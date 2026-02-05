import { Button, Text, View } from "react-native";
import { useTranslation } from "../hooks/useLanguage";
import { useAuth } from "../hooks/useAuth";
import { useRoleNavigation } from "../hooks/useRoleNavigation";

export const NotAuthorizedScreen = () => {
  const { t } = useTranslation();
  const { roleGoBack } = useRoleNavigation();

  return (
    <View>
      <Text>{t("auth.notAuthorizedTitle")}</Text>
      <Text>{t("auth.notAuthorizedBody")}</Text>
      <Button
        title={t("auth.notAuthorized.goBack")}
        onPress={() => roleGoBack()}
      />
    </View>
  );
};
