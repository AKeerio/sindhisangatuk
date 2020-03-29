import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

 function Album(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.albums.name}
            className={classes.media}
            height="140"
            image={props.albums.cover_photo.source}
            title={props.albums.name}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.albums.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}

export default Album;