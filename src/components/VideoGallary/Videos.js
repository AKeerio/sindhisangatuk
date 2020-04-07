import React, { useState, useEffect, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
const API_KEY = `${process.env.REACT_APP_API_KEY_FB}`;

export default function Videos(props) {
  var videos = [];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
  const openLightbox = useCallback((event, { video, index }) => {
    setCurrentVideo(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentVideo(0);
    setViewerIsOpen(false);
  };

  const [data, setData] = useState();
  const album_id = props.albumId;
  
  useEffect(() => {
    axios
      .get(
        "https://graph.facebook.com/v6.0/" +
          "708838385823055" +
          "?fields=videos.limit(9999){source,picture}&access_token=" +
          API_KEY
      )
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  return data ? (
    <div>
      {console.log(JSON.stringify(videos))}
      {data.videos.data.map((video, index) => {
        videos = [...videos, { src: video.picture, width: 4, height: 3 }];
      })}
      <Gallery photos={videos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentVideo}
              views={videos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  ) : (
    // <Fragment>
    //   <Grid container spacing={8}>
    //     {data.photos.data.map((picture, index) => {
    //       return (
    //         <Grid item xs={12} sm={6} lg={4} key={index}>
    //           <ThePicture picture={picture} />
    //         </Grid>
    //       );
    //     })}
    //   </Grid>
    // </Fragment>
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '50vh' }}
      >

        <Grid item xs={3}>
        
        <CircularProgress />
        </Grid>   

      </Grid>
    </div>
  );
}
