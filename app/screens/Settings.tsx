import { ImageBackground, SafeAreaView, Text } from "react-native";
import styles from "../styles/settings-style";

export default function Settings() {
  return (
    <SafeAreaView>
      <ImageBackground style={styles.backgroundIMG} source={require("../../img/settings.jpeg")} />
    </SafeAreaView>
  );
}
