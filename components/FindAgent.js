import React from "react";
import { useFonts, Jost_600Regular } from "@expo-google-fonts/jost";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  Pressable,
} from "react-native";

export default function FindAgent() {
  let [fontsLoaded] = useFonts({
    Jost_600Regular,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trusted Professionals</Text>
      <Text style={styles.p}>
        Colorado Real Estate is your premium search website brought to you by
        Keller Williams Freedom. We find you highly vetted Real Estate Agents as
        well as Mortgage Professionals. We are one click or phone call away,
        here to serve you and all of Colorado.{" "}
      </Text>
      <Pressable
        style={styles.agentBtn}
        onPress={() => Alert.alert("Simple Button pressed")}
      >
        Find an Agent
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "Jost, Arial, Tahoma, sans-serif",
    fontSize: "50px",
    lineHeight: "50px",
    fontWeight: 600,
    color: "#000000",
    letterSpacing: 0,
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    marginLeft: "20px",
    marginBottom: "20px",
    marginRight: '20px'
  },
  p: {
    fontFamily: "Jost, Arial, Tahoma, sans-serif",
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: "24px",
    letterSpacing: 0,
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    marginBottom: "20px",
    marginRight: "20px",
  },
  agentBtn: {
    backgroundColor: "#133362",
    color: "#ffffff",
    borderColor: "transparent",
    fontFamily: "Jost_400Regular",
    fontSize: "20px",
    lineHeight: "20px",
    fontWeight: 400,
    letterSpacing: "0px",
    paddingTop: "15px",
    paddingRight: "35px",
    paddingBottom: "15px",
    paddingLeft: "35px",
    borderWidth: 0,
    borderRadius: "35px",
    borderStyle: "solid",
    width: "54vw",
    textAlign: "center",
    verticalAlign: "middle",
    marginBottom: "40px",
    marginLeft: "30vw",
    backgroundColor: "#c1002c",
  },
  
});

// font-family:'Jost',Arial,Tahoma,sans-serif;font-size:50px;line-height:50px;font-weight:500;letter-spacing:0px;color:#000000;
