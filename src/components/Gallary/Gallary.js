import React, { useState, useEffect } from "react";
import axios from "axios";
import FB from "fb";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

const API_KEY =`${process.env.REACT_APP_API_KEY_FB}`;
export default function Gallary(props) {
  const classes = useStyles();
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
        "https://graph.facebook.com/v6.0/708838385823055?fields=albums.fields(photos.limit(99999).fields(source))&limit=99999&access_token="+API_KEY
      )
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  return data ? (
    <div>
      {data.albums.data.map((album, index) => (
        <div key={`${album.id}${index}`}>
          {album.photos.data.map((data, index) => (
            <div key={`${data}${index}`}>
              <img className={navImageClasses} src={data.source} />
            </div>
          ))}
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
