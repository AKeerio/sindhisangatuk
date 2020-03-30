import React, { useState, useEffect, Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import Album from "components/Album/Album.js";
import axios from "axios";

const API_KEY = `${process.env.REACT_APP_API_KEY_FB}`;

export default function AlbumGallary(props) {

  const [data, setData] = useState();


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
      <Grid container spacing={8}>
        {data.albums.data.map((album, index) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={index}>
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
    <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Loading...<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
  );
}
