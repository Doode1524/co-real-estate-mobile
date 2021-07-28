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
  cardRoot: {
    maxWidth: 322.44,
    minWidth: 322.44,
    paddingBottom: "20px",
  },
  cardMedia: {
    height: 250,
  },
  contentBox: {
    backgroundColor: "#c1002c",
    color: "rgba(255,255,255,.7)",
    fontFamily: "Jost, Arial, Tahoma, sans-serif",
    letterSpacing: "1px",
    textAlign: "center",
  },
});

export default function FindAgent() {
  const classes = useStyles();

  let [fontsLoaded] = useFonts({
    Jost_600Regular,
  });

  let cardData = [];

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
      <Grid container direction="column">
        <Grid item container direction="column" alignItems="center">
          <Pressable onPress={() => Alert.alert("Simple Button pressed")}>
            <Grid item>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://coloradorealestateus.com/wp-content/uploads/2021/04/communities-and-neighborhoods-in-colorado-springs-1-scaled.jpg"
                    title="CO Springs communitites"
                  />
                  <CardContent className={classes.contentBox}>
                    <Typography gutterBottom>
                      COLORADO SPRINGS COMMUNITIES
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Pressable>
          <Pressable onPress={() => Alert.alert("Simple Button pressed")}>
            <Grid item spacing={3}>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://coloradorealestateus.com/wp-content/uploads/2021/04/painted-mines-peyton-colorado-springs-area.jpg"
                    title="Things To Do Co springs"
                  />
                  <CardContent className={classes.contentBox}>
                    <Typography gutterBottom>
                      THINGS TO DO IN COLORADO SPRINGS
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Pressable>
          <Pressable onPress={() => Alert.alert("Simple Button pressed")}>
            <Grid item spacing={3}>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://coloradorealestateus.com/wp-content/uploads/2021/04/denver-colorado-real-estate.jpg"
                    title="Denver Communities"
                  />
                  <CardContent className={classes.contentBox}>
                    <Typography gutterBottom>DENVER COMMUNITIES</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Pressable>
          <Pressable onPress={() => Alert.alert("Simple Button pressed")}>
            <Grid item spacing={3}>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://coloradorealestateus.com/wp-content/uploads/2021/06/den-scaled.jpg"
                    title="Things to do in Denver"
                  />
                  <CardContent className={classes.contentBox}>
                    <Typography gutterBottom>THINGS TO DO IN DENVER</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Pressable>
        </Grid>
      </Grid>
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
    marginRight: "20px",
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
