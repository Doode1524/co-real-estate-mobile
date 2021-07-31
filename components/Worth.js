import { StatusBar } from "expo-status-bar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useFonts, Jost_400Regular } from "@expo-google-fonts/jost";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  Pressable,
} from "react-native";
import Luxury from "../landingPage/Luxury";
import FindAgent from "../landingPage/FindAgent";
import Loans from "../landingPage/Loans";
import Military from "../landingPage/Military";
import NewHomes from "../landingPage/NewHomes";

const useStyles = makeStyles(() => ({
  container: {
    position: 'absolute',
    top: "50vh",
  },
}));

export default function Worth({ navigation }) {
  const classes = useStyles({});
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.homeImg}
        resizeMode="cover"
        source={{
          uri: "https://coloradorealestateus.com/wp-content/uploads/2021/06/colorado-real-estate-main-background-colorado-springs-denver-realtor-find-a-home-11.jpg",
        }}
      >
        <Grid container className={classes.container}>
          <Grid item container>
            <Grid item>Hiiiiiiiii</Grid>
          </Grid>
        </Grid>
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
    justifyContent: "flex-start",
  },
  homeImg: {
    width: "100vw",
    height: "100vh",
  },
});
