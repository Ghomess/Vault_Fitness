import { Text, View } from "react-native";
import { useTranslation } from "../hooks/useLanguage";

export const StaffScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t("staff.title")}</Text>
    </View>
  );
};
