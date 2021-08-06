import { StatusBar } from "expo-status-bar";
import Home from "./landingPage/Home";
import FindAgent from "./landingPage/FindAgent";
import React from "react";
import Loans from "./landingPage/Loans";
import Luxury from "./landingPage/Luxury";
import Military from "./landingPage/Military";
import NewHomes from "./landingPage/NewHomes";
import Worth from "./components/Worth";
import Search from "./components/Search";
import Consultation from "./components/Consultation";
import FindRoute from "./components/FindRoute";
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
        <Stack.Screen name="Search Colorado" component={Search} />
        <Stack.Screen name="Schedule a Consultation" component={Consultation} />
        <Stack.Screen name="Find an Agent" component={FindRoute} />
      </Stack.Navigator>
      {/* <FindAgent />
        <Loans />
        <Luxury />
        <Military />
        <NewHomes />
        <StatusBar style="auto" /> 
        //test*/}
    </NavigationContainer>
  );
}
