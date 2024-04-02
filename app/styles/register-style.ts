import { StyleSheet } from "react-native";
import FontSize from "../constants/FontSize";
import FontFamily from "../constants/FontFamily";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  boxOne: {
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: FontFamily["poppins-bold"],
    marginVertical: 30,
  },
  subTitle: {
    fontFamily: FontFamily["poppins-semiBold"],
    fontSize: FontSize.small,
    maxWidth: "80%",
    textAlign: "center",
  },
  boxTwo: {
    marginVertical: 30,
  },
  input: {
    fontFamily: FontFamily["poppins-regular"],
    fontSize: FontSize.small,
    padding: 20,
    backgroundColor: Colors.lightPrimary,
    borderRadius: 10,
    marginVertical: 10,
  },
  touchSignUp: {
    padding: 20,
    backgroundColor: Colors.primary,
    marginVertical: 30,
    borderRadius: 10,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textSignUp: {
    fontFamily: FontFamily["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large,
  },
  touchSignIn: {
    padding: 10,
  },
  textSignIn: {
    fontFamily: FontFamily["poppins-semiBold"],
    color: Colors.text,
    textAlign: "center",
    fontSize: FontSize.small,
  },
  boxThree: {
    marginVertical: 30,
  },
  textContinue: {
    fontFamily: FontFamily["poppins-semiBold"],
    color: Colors.primary,
    textAlign: "center",
    fontSize: FontSize.small,
    marginHorizontal: 10,
  },
  viewIcons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  touchIcons: {
    padding: 10,
    backgroundColor: Colors.gray,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});

export default styles;
