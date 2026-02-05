import { AppStackNavigator as Stack } from "../stack";
import { AdminScreen } from "../../screens/AdminScreen";
import { ProtectedScreen } from "../ProtectedScreen";

export const AdminFeatures = () => (
  <Stack.Screen name="Admin">
    {() => (
      <ProtectedScreen minRole="admin">
        <AdminScreen />
      </ProtectedScreen>
    )}
  </Stack.Screen>
);
