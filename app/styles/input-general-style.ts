import { StyleSheet } from "react-native";
import FontFamily from "../constants/FontFamily";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  input: {
    fontFamily: FontFamily["poppins-regular"],
    fontSize: FontSize.small,
    padding: 20,
    backgroundColor: Colors.lightPrimary,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default styles;
