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

function Album(props) {
  const classes = useStyles();
  return (
    <Link
      underline="none"
      component={RouterLink}
      to={`/gallary-page/${props.albums.id}`}
      className="item"
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.albums.name}
            className={classes.media}
            height="300"
            image={props.albums.cover_photo.source}
            title={props.albums.name}
          />
          <CardContent>
            <h5 className={classes.description}>{props.albums.name}</h5>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default Album;
