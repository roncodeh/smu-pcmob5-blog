import React from "react";
import { AsyncStorage, Button, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import Asyncstorage from '@react-native-async-storage/async-storage';

export default function AccountScreen({ navigation }) {
  function signOut() {
    Asyncstorage.removeItem("token");
    navigation.navigate("SignIn")
  }

  return (
    <View style={commonStyles.container}>
      <Text>Account Screen</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({});
