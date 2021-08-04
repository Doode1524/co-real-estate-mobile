import { StatusBar } from "expo-status-bar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, {useState} from "react";
import { useFonts, Jost_400Regular } from "@expo-google-fonts/jost";
import TextField from "@material-ui/core/TextField";
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
    position: "absolute",
    top: "45vh",
    width: "100vw",
  },
  
}));

export default function Worth({ navigation }) {
  const [address, setAddress] = useState("")
  const classes = useStyles({});
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
  });

  const handleChange = (e) => {
    setAddress(e.target.value)
  };

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
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <TextField
                id="outlined-margin-none"
                placeholder="Enter an address"
                variant="outlined"
                onChange={(e) => handleChange(e)}
              />
              <Pressable
                onPress={() => console.log(address)}
                style={styles.worthBtn}
              >
                Check
              </Pressable>
            </Grid>
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
  worthBtn: {
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
    display: "flex",
    verticalAlign: "middle",
    marginBottom: "40px",
    marginLeft: "10px",
    marginTop: '10px',
  },
});
