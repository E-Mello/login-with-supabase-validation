import { StyleSheet } from "react-native";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import FontFamily from "../constants/FontFamily";

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
    fontSize: FontSize.large,
    maxWidth: "60%",
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
  forgotPassText: {
    fontFamily: FontFamily["poppins-semiBold"],
    fontSize: FontSize.small,
    color: Colors.primary,
    alignSelf: "flex-end",
  },
  touchSignIn: {
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
  textSignIn: {
    fontFamily: FontFamily["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large,
  },
  touchSignUp: {
    padding: 10,
  },
  textSignUp: {
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
