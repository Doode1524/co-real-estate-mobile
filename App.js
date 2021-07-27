import { StatusBar } from "expo-status-bar";
import Home from "./components/Home";
import React from "react";
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

      <StatusBar style="auto" />
    </View>
  );
}
