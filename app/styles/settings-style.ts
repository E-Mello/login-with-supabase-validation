import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  backgroundIMG: {
    height: "100%",
    width: width * 1,
    resizeMode: "contain",
  },
});

export default styles;
