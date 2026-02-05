import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { useTranslation } from "../hooks/useLanguage";
import { useRoleNavigation } from "../hooks/useRoleNavigation";
import { canAccess } from "../services/auth/permissions";

export const HomeScreen = () => {
  const { user, logout } = useAuth();
  const { t, setLanguage } = useTranslation();
  const { roleNavigate } = useRoleNavigation();

  return (
    <View style={styles.container}>
      <Text>{t("home.title")}</Text>
      <View style={styles.languagesContainer}>
        <Button title={"🇵🇹"} onPress={() => setLanguage("pt")} />
        <Button title={"🇪🇸"} onPress={() => setLanguage("es")} />
        <Button title={"🇬🇧"} onPress={() => setLanguage("en")} />
      </View>
      <Text>{t("test.onlyEn")}</Text>
      {/*  //TODO: Later, create components where we pass the user role as param and  do the canAccess there so here it will be more simple and readable
       */}
      {canAccess(user?.role, "staff") && (
        <Button
          title={t("staff.title")}
          onPress={() => {
            roleNavigate("Staff", "staff");
          }}
        />
      )}
      {canAccess(user?.role, "admin") && (
        <Button
          title={t("admin.title")}
          onPress={() => {
            roleNavigate("Admin", "admin");
          }}
        />
      )}
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
