import { StatusBar } from "expo-status-bar";
import Home from "./landingPage/Home";
import FindAgent from "./landingPage/FindAgent";
import React from "react";
import Loans from "./landingPage/Loans";
import Luxury from "./landingPage/Luxury";
import Military from "./landingPage/Military";
import NewHomes from "./landingPage/NewHomes";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  Pressable,
} from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Home Stack={Stack} />
        <FindAgent />
        <Loans />
        <Luxury />
        <Military />
        <NewHomes />
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}
