import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/login-style";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import InputTextGeneral from "../components/InputTextGeneral";

import { supabase } from "../lib/supabase";
import { useState } from "react";

export default function Login({ navigation }: any) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
      Alert.prompt(error.message);
      setLoading(false);
    } else {
      Alert.alert("You're logged in!");
      Alert.prompt("Você logou");
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.boxOne}>
          <Text style={styles.title}>Login here</Text>
          <Text style={styles.subTitle}>Welcome back you've been missed!</Text>
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
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>

        <View>
          <Text style={styles.forgotPassText}>Forgot your password ? </Text>
        </View>

        <TouchableOpacity
          style={styles.touchSignIn}
          onPress={() => signInWithEmail()}
        >
          <Text style={styles.textSignIn}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchSignUp}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.textSignUp}>Create new account</Text>
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
