import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  Text
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import { 
  hasHardwareAsync,
  isEnrolledAsync,
  authenticateAsync 
} from 'expo-local-authentication';

function Login(props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(value) {
    setEmail(value);
  }
  function handlePassword(value) {
    setPassword(value);
  }

  function handleLogin() {
    email == "aaaa" && password == "123"
      ? storeDataAndNavigate()
      : alert("Please provide correct details.");
  }

  const biometricsAuth = async () => {
    const compatible = await hasHardwareAsync()
    if (!compatible) throw 'This device is not compatible for biometric authentication'
    const enrolled = await isEnrolledAsync()
    if (!enrolled) throw 'This device dont have biometric authentication enabled'
    const result = await authenticateAsync()
    if (!result.success) throw `${result.error} - Authentication unsuccessful`
    return
}

  const storeDataAndNavigate = async (value) => {
    try {
      await AsyncStorage.setItem("userEmail", email);
      navigation.navigate("CakesList");
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    biometricsAuth();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={handleEmail}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handlePassword}
        />
      </View>
      <View>
        <Button title="Login" onPress={handleLogin}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
