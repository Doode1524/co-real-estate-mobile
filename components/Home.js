import { StatusBar } from "expo-status-bar";
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

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.homeImg}
        resizeMode="cover"
        source={{
          uri: "https://coloradorealestateus.com/wp-content/uploads/2021/06/colorado-real-estate-main-background-colorado-springs-denver-realtor-find-a-home-11.jpg",
        }}
      >
        <View style={styles.btnColumn}>
          <Pressable
            style={styles.homeBtn}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            SEARCH COLORADO
          </Pressable>
          <Pressable
            style={[styles.homeBtn, styles.homeBtn2]}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            What's Your Property Worth?
          </Pressable>
          <Pressable
            style={[styles.homeBtn, styles.homeBtn3]}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            Schedule a Consultation
          </Pressable>
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  homeImg: {
    width: "100vw",
    height: "100vh",
  },
  btnColumn: {
    top: "40vh",
    display: "flex",
    flex: 1,
    alignItems: "center",
    maxHeight: "40px",
  },
  homeBtn: {
    backgroundColor: "#133362",
    color: "#ffffff",
    borderColor: "transparent",
    fontFamily: "Jost",
    fontSize: "20px",
    lineHeight: "20px",
    fontWeight: 500,
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
    display: "flex",
    verticalAlign: "middle",
    marginBottom: "40px",
  },
  homeBtn3: {
    backgroundColor: "#c1002c",
  },
  homeBtn2: {
    width: "64vw",
  },
});
// https://coloradorealestateus.com/wp-content/uploads/2021/06/colorado-real-estate-main-background-colorado-springs-denver-realtor-find-a-home-11.jpg
