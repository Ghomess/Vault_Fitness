import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { ScreenStatus } from "../components/ScreenStatus/ScreenStatus";
import { useAuth } from "../hooks/useAuth";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { login, status } = useAuth();
  const onSubmit = () => {
    if (!email || !password) {
      setError("Email and password are required");
    }
    login(email, password);

    // auth logic later
  };

  return (
    <ScreenStatus loading={status === "loading"}>
      <Text>Login</Text>
      {error && <Text>{error}</Text>}
      <TextInput
        autoComplete="email"
        keyboardType="email-address"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        onFocus={() => setError(null)}
      />
      <TextInput
        autoComplete="password"
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        onFocus={() => setError(null)}
      />

      <Button title="Login" onPress={onSubmit} />
      <Button title="Continue with Apple" disabled />
      <Button title="Continue with Google" disabled />
    </ScreenStatus>
  );
};
