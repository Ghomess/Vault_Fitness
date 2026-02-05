import { AppStackNavigator as Stack } from "../stack";
import { StaffScreen } from "../../screens/StaffScreen";
import { ProtectedScreen } from "../ProtectedScreen";

export const StaffFeatures = () => (
  <Stack.Screen name="Staff">
    {() => (
      <ProtectedScreen minRole="staff">
        <StaffScreen />
      </ProtectedScreen>
    )}
  </Stack.Screen>
);
