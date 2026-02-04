import { useState } from "react";
import { Button, Text, TextInput } from "react-native";
import { ScreenStatus } from "../components/ScreenStatus/ScreenStatus";
import { useAuth } from "../hooks/useAuth";
import { useTranslation } from "../hooks/useLanguage";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { login, status } = useAuth();

  const { t } = useTranslation();
  const onSubmit = () => {
    if (!email || !password) {
      setError(t("errors.emailOrPassword"));
    }
    login(email, password);

    // auth logic later
  };

  return (
    <ScreenStatus loading={status === "loading"}>
      <Text>{t("login.title")}</Text>
      {error && <Text>{error}</Text>}
      <TextInput
        autoComplete="email"
        keyboardType="email-address"
        placeholder={t("login.email")}
        value={email}
        onChangeText={setEmail}
        onFocus={() => setError(null)}
      />
      <TextInput
        autoComplete="password"
        secureTextEntry
        placeholder={t("login.password")}
        value={password}
        onChangeText={setPassword}
        onFocus={() => setError(null)}
      />

      <Button title={t("login.button")} onPress={onSubmit} />
      <Button title={t("login.continueWithApple")} disabled />
      <Button title={t("login.continueWithGoogle")} disabled />
    </ScreenStatus>
  );
};
