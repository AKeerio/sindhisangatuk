import React, { useState, useEffect, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(styles);
const API_KEY = `${process.env.REACT_APP_API_KEY_FB}`;

export default function AlbumGallary(props) {
  const classes = useStyles();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://graph.facebook.com/v6.0/708838385823055?fields=albums.limit(9999){name,cover_photo.fields(source),created_time}&access_token=" +
          API_KEY
      )
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  return data ? (
    <div>
      <Grid container spacing={1}>
        {data.albums.data.map((album, index) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Link
                underline="none"
                component={RouterLink}
                to={`/photos/${album.id}`}
                className="item"
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={album.name}
                      className={classes.media}
                      height="300"
                      image={album.cover_photo.source}
                      title={album.name}
                    />
                    <CardContent>
                      <h5 className={classes.description}>{album.name}</h5>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  ) : (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "50vh" }}
      >
        <Grid item xs={3}>
          <CircularProgress />
        </Grid>
      </Grid>
    </div>
  );
}
