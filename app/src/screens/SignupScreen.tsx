import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { ScreenStatus } from "../components/ScreenStatus/ScreenStatus";
import { useTranslation } from "../hooks/useLanguage";

export const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  function onSubmit() {
    if (!email || !password) {
      setError(t("errors.required"));
    }
    // auth logic later
  }

  return (
    <ScreenStatus loading={loading}>
      <Text>{t("signup.title")}</Text>
      {error && <Text>{error}</Text>}
      <TextInput
        autoComplete="email"
        keyboardType="email-address"
        placeholder={t("login.email")}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        autoComplete="password"
        secureTextEntry
        placeholder={t("login.password")}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        autoComplete="password"
        secureTextEntry
        placeholder={t("signup.confirmPassword")}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title={t("signup.button")} onPress={onSubmit} />
      <Button title={t("login.continueWithApple")} disabled />
      <Button title={t("login.continueWithGoogle")} disabled />
    </ScreenStatus>
  );
};
