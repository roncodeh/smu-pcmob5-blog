import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import SignInScreen from "./screens/SignInScreen";
import AccountScreen from "./screens/AccountScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Asyncstorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [signedIn, setSignedIn] = useState(false)

  async function loadtoken() {
    const token = await Asyncstorage.getItem("token")
    if (token) setSignedIn(true);
    setLoading(false);
  }

  useEffect(() => {
    loadtoken();
  }, []);

  return loading ? (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        headerMode="none"
        initialRouteName={signedIn ? "Account" : "SignIn"}
      >
        <Stack.Screen component={AccountScreen} name="Account" />
        <Stack.Screen component={SignInScreen} name="SignIn" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
