import { AdminFeatures } from "./features/AdminFeatures";
import { MemberFeatures } from "./features/MemberFeatures";
import { StaffFeatures } from "./features/StaffFeatures";
import { AppStackNavigator as Stack } from "./stack";

export function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {MemberFeatures()}
      {StaffFeatures()}
      {AdminFeatures()}
    </Stack.Navigator>
  );
}
