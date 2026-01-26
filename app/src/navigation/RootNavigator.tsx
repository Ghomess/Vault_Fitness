import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";

export function RootNavigator() {
  const isAuthenticated = false; // TEMP — will come from auth state

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
