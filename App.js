import { StatusBar } from "expo-status-bar";
import Home from "./components/Home";
import FindAgent from "./components/FindAgent";
import React from "react";
import Loans from "./components/Loans";
import Luxury from "./components/Luxury";
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
      <StatusBar style="auto" />
    </View>
  );
}
