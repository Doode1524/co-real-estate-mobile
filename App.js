import { StatusBar } from "expo-status-bar";
import Home from "./landingPage/Home";
import FindAgent from "./landingPage/FindAgent";
import React from "react";
import Loans from "./landingPage/Loans";
import Luxury from "./landingPage/Luxury";
import Military from "./landingPage/Military";
import NewHomes from "./landingPage/NewHomes";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  Pressable,
} from "react-native";

export default function App() {
  return (
    <View>
      <Home />
      <FindAgent />
      <Loans />
      <Luxury />
      <Military />
      <NewHomes />
      <StatusBar style="auto" />
    </View>
  );
}
