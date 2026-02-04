import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";
import { useAuth } from "../hooks/useAuth";

export function RootNavigator() {
  const { status } = useAuth();

  return (
    <NavigationContainer>
      {status === "authenticated" ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
