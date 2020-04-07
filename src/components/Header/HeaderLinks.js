/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/albums"
          color="transparent"
          className={classes.navLink}
        >
          Photos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/videos"
          color="transparent"
          className={classes.navLink}
        >
          Videos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/home"
          color="transparent"
          className={classes.navLink}
        >
          Contact Us
        </Button>
      </ListItem>
    </List>
  );
}
