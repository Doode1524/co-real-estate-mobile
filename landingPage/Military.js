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
    height: "1230px",
    width: "100vw",
    backgroundColor: "#ffffff",
  },
  title: {
    color: "#111111",
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
    color: "#111111",
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

export default function Military() {
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
            <img src="https://coloradorealestateus.com/wp-content/uploads/2021/06/ColoradoRealEstate-logos-ALL_military-300x300.png" />
          </Grid>
          <Grid item>
            <Typography className={classes.title}>
              Colorado Military Housing
            </Typography>
            <Typography className={classes.desc}>
              Our team specializs in helping military families buy and sell
              their homes with ease in Colorado Springs near Peterson Air Force
              Base, Schriever Air Force Base, Fort Carson and the Air Force
              Academy. If you recently received orders for Moving to Colorado,
              congratulations. We are PCS Pros at moving Military members.
            </Typography>
          </Grid>
          <Grid item className={classes.button}>
            <Pressable onPress={() => Alert.alert("Simple Button pressed")}>
              Search for homes near military bases in Colorado Springs
            </Pressable>
          </Grid>
          <Grid item>
            <img src="https://coloradorealestateus.com/wp-content/uploads/2021/07/ColoradoRealEstate-logos-ALL_foreclosure-300x300.png" />
          </Grid>
          <Grid item>
            <Typography className={classes.title}>
              Colorado Foreclosure Market
            </Typography>
            <Typography className={classes.desc}>
              Facing foreclosure? Get a cash offer on your home in 48 hours. Our
              team at Colorado Real Estate are experts at helping you handle
              foreclosures. We also have the latest list of foreclosed
              properties at our disposal.
            </Typography>
            <Typography className={classes.desc}>
              Connect with our team today.
            </Typography>
          </Grid>
          <Grid item className={classes.button}>
            <Pressable onPress={() => Alert.alert("Simple Button pressed")}>
              Get a cash offer or search foreclosed homes!
            </Pressable>
          </Grid>
        </Grid>
      </Grid>
    </View>
  );
}
