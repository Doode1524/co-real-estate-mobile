import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.homeImg}
        source={{
          uri: "https://coloradorealestateus.com/wp-content/uploads/2021/06/colorado-real-estate-main-background-colorado-springs-denver-realtor-find-a-home-11.jpg",
        }}
      />

      <Button
        title="Learn More"
        accessibilityLabel="Learn more access"
        onPress={() => Alert.alert("Simple Button pressed")}
        color="#f194ff"
      />
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
});
// https://coloradorealestateus.com/wp-content/uploads/2021/06/colorado-real-estate-main-background-colorado-springs-denver-realtor-find-a-home-11.jpg
