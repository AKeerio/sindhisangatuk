import React, { useState, useEffect, Fragment } from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Album from "components/Album/Album.js";
import axios from "axios";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

const API_KEY = `${process.env.REACT_APP_API_KEY_FB}`;

const dashboardRoutes = [];

export default function Gallary(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [data, setData] = useState();

  const navImageClasses = classNames(classes.imgFluid, classes.imgGallery);

  useEffect(() => {
    axios
      .get(
        "https://graph.facebook.com/v6.0/708838385823055?fields=albums{name,cover_photo.fields(source),created_time}&access_token=" +
          API_KEY
      )
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  return data ? (
    <Fragment>
      <Grid container spacing={24}>
        {data.albums.data.map((album, index) => {
          return (
            <Grid item xs={12} sm={6} lg={4}>
              <Album albums={album} />
            </Grid>
          );
        })}
      </Grid>
      {/* {data.albums.data.map((album, index) => (
        <div key={`${album.id}${index}`}>
          {album.name.map((data, index) => (
            <div key={`${data}${index}`}>
              <img className={navImageClasses} src={data.source} />
            </div>
          ))}
        </div>
      ))} */}
    </Fragment>
  ) : (
    <div>Loading...</div>
  );
}
