import { ImageBackground, SafeAreaView } from "react-native";
import styles from "../styles/home-style";

export default function Home() {
  return (
    <SafeAreaView>
      <ImageBackground style={styles.backgroundIMG} source={require("../../img/anonymous.jpg")} />
    </SafeAreaView>
  );
}
