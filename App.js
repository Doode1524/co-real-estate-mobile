import { StatusBar } from "expo-status-bar";
import Home from "./landingPage/Home";
import FindAgent from "./landingPage/FindAgent";
import React from "react";
import Loans from "./landingPage/Loans";
import Luxury from "./landingPage/Luxury";
import Military from "./landingPage/Military";
import NewHomes from "./landingPage/NewHomes";
import Worth from "./components/Worth";
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="What's Your Home Worth?" component={Worth} />
      </Stack.Navigator>
      {/* <FindAgent />
        <Loans />
        <Luxury />
        <Military />
        <NewHomes />
        <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}
