import React from "react";
import { StyleSheet } from "react-native";

import LoginContents from "../components/login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function LoginScreen({navigation, route}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Login"} component={LoginContents} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({

});