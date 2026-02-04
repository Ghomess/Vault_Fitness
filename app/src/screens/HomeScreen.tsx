import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { useTranslation } from "../hooks/useLanguage";

export const HomeScreen = () => {
  const { logout } = useAuth();
  const { t, setLanguage } = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t("home.title")}</Text>
      <View style={styles.languagesContainer}>
        <Button title={"🇵🇹"} onPress={() => setLanguage("pt")} />
        <Button title={"🇪🇸"} onPress={() => setLanguage("es")} />
        <Button title={"🇬🇧"} onPress={() => setLanguage("en")} />
      </View>
      <Text>{t("test.onlyEn")}</Text>
      <Button title={t("home.logout")} onPress={() => logout()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  languagesContainer: {
    flexDirection: "row",
  },
});
