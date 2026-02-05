import { AppStackNavigator as Stack } from "../stack";
import { HomeScreen } from "../../screens/HomeScreen";

export const MemberFeatures = () => (
  <Stack.Screen name="Home" component={HomeScreen} />
);
