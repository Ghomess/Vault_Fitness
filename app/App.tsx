import { AuthProvider } from "./src/context/AuthContext";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { enableScreens } from "react-native-screens";
import { LanguageProvider } from "./src/context/LanguageContext";
import "./src/i18n";

enableScreens();

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <RootNavigator />
      </LanguageProvider>
    </AuthProvider>
  );
}
