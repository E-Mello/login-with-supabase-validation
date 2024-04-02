import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/welcome-style';
import React from 'react';

export default function Welcome({ navigation }: any) {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground style={styles.backgroundIMG} source={require("../../img/welcome-image.png")} />
      </View>
      <View style={styles.title}>
        <Text style={styles.subTitle}>
          Discover Your Dream Job here
        </Text>
        <Text style={styles.note}>
          Explore all the existing job roles based on your interest and study major
        </Text>
      </View>
      <View style={styles.viewLogin}>
        <TouchableOpacity style={styles.touchLogin} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textLogin}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchRegister} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textRegister}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

