import React, { useState, useEffect, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from "axios";
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const API_KEY = `${process.env.REACT_APP_API_KEY_FB}`;

export default function Pictures(props) {
  var photos = [];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const [data, setData] = useState();
  const album_id = props.albumId;

  useEffect(() => {
    axios
      .get(
        "https://graph.facebook.com/v6.0/" +
          album_id +
          "?fields=photos.limit(9999).fields(source, height, width)&access_token=" +
          API_KEY
      )
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  return data ? (
    <div>
      {data.photos.data.map((picture, index) => {
        photos = [
          ...photos,
          { src: picture.source, width: picture.width, height: picture.height },
        ];
      })}
      {console.log(photos)}
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
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
        style={{ minHeight: "50vh" }}
      >
        <Grid item xs={3}>
          <CircularProgress />
        </Grid>
      </Grid>
    </div>
  );
}
