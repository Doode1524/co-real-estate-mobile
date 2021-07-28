import React from "react";
import { useFonts, Jost_600Regular, Jost_400Regular } from "@expo-google-fonts/jost";
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
    height: "100vh",
    width: "100vw",
    backgroundColor: "#fbfbd5",
  },
  info: {
    maxWidth: 322.44,
    minWidth: 322.44,
    fontSize: '13px',
    fontFamily: "Jost, Arial, Tahoma, sans-serif",
    // letterSpacing: "1px",
    fontWeight: 400,
    color: "#4d5d71",
    paddingBottom: "14px"
  },
});

export default function Loans() {
  const classes = useStyles();

  let [fontsLoaded] = useFonts({
    Jost_600Regular,
    Jost_400Regular,
  });

  return (
    <View>
      <Grid container className={classes.container}>
        <Grid item container direction="column" alignItems="center">
          <Grid item style={{ paddingTop: "30px", paddingBottom: "10px" }}>
            <img src="https://coloradorealestateus.com/wp-content/uploads/2021/06/ColoradoRealEstate-logos-ALL_homeLoan-300x300.png" />
          </Grid>
          <Grid item >
            <Typography paragraph className={classes.info}>
              Getting pre-qualified for your mortgage before setting out to
              search for a home is a critical first step in getting the home you
              want, esepcially in today's competitive market. At Colorado Real
              Estate, we work with many reputable lenders. Check back for a
              guide to local lenders to get you pre-qualified.
            </Typography>
            <Typography paragraph className={classes.info}>
                Be sure to check out our mortgage calculator too!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </View>
  );
}
