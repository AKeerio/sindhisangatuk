import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

function ThePicture(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.picture.id}
          className={classes.media}
          height="300"
          image={props.picture.source}
          title={props.picture.id}
        />
      </CardActionArea>
    </Card>
  );
}

export default ThePicture;
