import React, { useState, useEffect, Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import axios from "axios";
import ThePicture from "./ThePicture";

const API_KEY = `${process.env.REACT_APP_API_KEY_FB}`;

export default function Pictures(props) {

  const [data, setData] = useState();
  const album_id=props.albumId;
  useEffect(() => {
    axios
      .get(
        "https://graph.facebook.com/v6.0/"+album_id+"?fields=photos.fields(source)&access_token="+API_KEY
      )
      .then(({ data }) => {      
        setData(data);
        console.log(data);
      });
  }, []);

  return data ? (
    <Fragment>
      <Grid container spacing={8}>
        {data.photos.data.map((picture, index) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <ThePicture picture={picture} />
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  ) : (
    <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Loading...<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
  );
}
