import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { ScreenStatus } from "../components/ScreenStatus/ScreenStatus";

export const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  function onSubmit() {
    if (!email || !password) {
      setError("Email and password are required");
    }
    // auth logic later
  }

  return (
    <ScreenStatus loading={loading}>
      <Text>SignupScreen</Text>
      {error && <Text>{error}</Text>}
      <TextInput
        autoComplete="email"
        keyboardType="email-address"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        autoComplete="password"
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        autoComplete="password"
        secureTextEntry
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Signup" onPress={onSubmit} />
      <Button title="Continue with Apple" disabled />
      <Button title="Continue with Google" disabled />
    </ScreenStatus>
  );
};
