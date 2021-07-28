import React from "react";
import { useFonts, Jost_600Regular } from "@expo-google-fonts/jost";
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
});

export default function Loans() {
  const classes = useStyles();

  let [fontsLoaded] = useFonts({
    Jost_600Regular,
  });

  return (
    <View>
      <Grid container className={classes.container}>
        <Grid item container direction="column">
            
        </Grid>
      </Grid>
    </View>
  );
}
