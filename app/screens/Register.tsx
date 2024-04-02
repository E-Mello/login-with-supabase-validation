import {
  Alert,
  SafeAreaView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/register-style";
import Colors from "../constants/Colors";
import InputTextGeneral from "../components/InputTextGeneral";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Register({ navigation }: any) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function sendToast() {
    signUpWithEmail();
    ToastAndroid.show(
      "Verifique seu e-mail e confirme o link par criar a conta",
      ToastAndroid.SHORT
    );
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigation.navigate("Login");
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
      setLoading(false);
    } else {
      //
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.boxOne}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subTitle}>
            Create an account so you can explore all the existing jobs
          </Text>
        </View>

        <View style={styles.boxTwo}>
          <InputTextGeneral
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />

          <InputTextGeneral
            placeholder="Password"
            secureTextEntry={true}
            showPasswordIcon={true}
            onChangeText={(password) => setPassword(password)}
            value={password}
          />

          <InputTextGeneral
            placeholder="Confirm Password"
            secureTextEntry={true}
            showPasswordIcon={true}
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
            value={confirmPassword}
          />
        </View>
        <TouchableOpacity
          style={styles.touchSignUp}
          onPress={() => sendToast()}
        >
          <Text style={styles.textSignUp}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchSignIn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textSignIn}>Already have an account</Text>
        </TouchableOpacity>

        <View style={styles.boxThree}>
          <Text style={styles.textContinue}>Or continue with</Text>

          <View style={styles.viewIcons}>
            <TouchableOpacity style={styles.touchIcons}>
              <Ionicons name="logo-google" color={Colors.text} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchIcons}>
              <Ionicons name="logo-apple" color={Colors.text} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchIcons}>
              <Ionicons name="logo-facebook" color={Colors.text} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
