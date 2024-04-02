import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fonts from "./app/constants/configFonts";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./app/routes";
import LoginProvider from "./app/context/LoginContext";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <LoginProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </LoginProvider>
  );
}
