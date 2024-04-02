import { Dimensions, StyleSheet } from "react-native";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import FontFamily from "../constants/FontFamily";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundIMG: {
    height: height * 0.5,
    width: width * 1,
    resizeMode: "contain",
  },
  title: {
    paddingHorizontal: 40,
    paddingTop: 40,
  },
  subTitle: {
    fontSize: FontSize.xxLarge,
    color: Colors.primary,
    fontFamily: FontFamily["poppins-bold"],
    textAlign: "center",
    marginTop: 20,
  },
  note: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: FontFamily["poppins-regular"],
    textAlign: "center",
  },
  viewLogin: {
    paddingHorizontal: 20,
    paddingTop: 60,
    flexDirection: "row",
  },
  touchLogin: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "48%",
    borderRadius: 10,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textLogin: {
    fontFamily: FontFamily["poppins-bold"],
    color: Colors.onPrimary,
    fontSize: FontSize.large,
    textAlign: "center",
  },
  touchRegister: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "48%",
    borderRadius: 10,
  },
  textRegister: {
    // fontFamily: FontFamily['poppins-bold']
    color: Colors.text,
    fontSize: FontSize.large,
    textAlign: "center",
  },
});

export default styles;
