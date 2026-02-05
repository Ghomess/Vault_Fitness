import { Alert } from "react-native";
import { Translate } from "../types/languageType";

export const showNotAuthorizedAlert = (t: Translate) => {
  Alert.alert(t("auth.notAuthorizedTitle"), t("auth.notAuthorizedBody"), [
    { text: t("auth.notAuthorized.goBack") },
  ]);
};
