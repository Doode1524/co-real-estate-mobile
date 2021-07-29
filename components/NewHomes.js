import React from "react";
import {
  useFonts,
  Jost_600Regular,
  Jost_400Regular,
} from "@expo-google-fonts/jost";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button as ButtonMUI } from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  Pressable,
} from "react-native";

const useStyles = makeStyles({
  container: {
    height: "630px",
    width: "100vw",
    backgroundColor: "#000000",
  },
  title: {
    color: "#ffffff",
    fontSize: "17px",
    fontFamily: "Jost, Arial, Tahoma, sans-serif",
    fontWeight: "bold",
    marginTop: "15px",
    textAlign: "left",
    maxWidth: 322.44,
    minWidth: 322.44,
  },
  desc: {
    textAlign: "left",
    maxWidth: 322.44,
    minWidth: 322.44,
    color: "#ffffff",
    fontSize: "13px",
    fontFamily: "Jost, Arial, Tahoma, sans-serif",
    marginTop: "17px",
  },
  button: {
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
    width: "90vw",
    textAlign: "center",
    display: "inline-block",
    position: "relative",
    textAlign: "center",
    verticalAlign: "middle",
    marginBottom: "20px",
    marginTop: "30px",
  },
});

export default function NewHomes() {
  const classes = useStyles();

  let [fontsLoaded] = useFonts({
    Jost_600Regular,
    Jost_400Regular,
  });

  return (
    <View>
      <Grid container className={classes.container}>
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img src="https://coloradorealestateus.com/wp-content/uploads/2021/07/ColoradoRealEstate-logos-ALL_newBuild-300x300.png" />
          </Grid>
          <Grid item>
            <Typography className={classes.title}>
              Colorado New Builds
            </Typography>
            <Typography className={classes.desc}>
              You can hardly drive through the state of Colordo without seeing
              new construction. You need a realtor even when buying a new build
              to ensure you get the most bang for your money and they will
              negotiate on your behalf. Our team has relationships with new and
              custom builders around the state. Take a look at new construction
              home here.
            </Typography>
          </Grid>
          <Grid item className={classes.button}>
            <Pressable onPress={() => Alert.alert("Simple Button pressed")}>
              Search New Build Homes in Colorado
            </Pressable>
          </Grid>
        </Grid>
      </Grid>
    </View>
  );
}
