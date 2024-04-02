import React, { useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import styles from "../styles/input-general-style";
import { Feather } from "@expo/vector-icons";

interface InputTextGeneralProps extends TextInputProps {
  showPasswordIcon?: boolean;
}

const InputTextGeneral: React.FC<InputTextGeneralProps> = ({
  secureTextEntry = false,
  showPasswordIcon = false,
  ...props
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(
    !secureTextEntry
  );

  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  }

  return (
    <View style={{ position: "relative" }}>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.darkText}
        secureTextEntry={!passwordVisible}
        style={[
          styles.input,
          focus && {
            borderWidth: 2,
            borderColor: Colors.primary,
            shadowOffset: { width: 4, height: 10 },
            shadowColor: Colors.primary,
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
        ]}
        {...props}
      />
      {secureTextEntry && showPasswordIcon && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={{ position: "absolute", top: 32, right: 8 }}
        >
          <Feather
            name={passwordVisible ? "eye" : "eye-off"}
            size={24}
            color="#000000"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputTextGeneral;
