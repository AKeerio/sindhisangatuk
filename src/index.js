import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import AlbumsPage from "views/AlbumsPage/AlbumsPage.js";
import PictureGallary from "views/PicturesPage/PicturesPage.js";
import VideosPage from "views/VideosPage/VideosPage.js";
import AboutPage from "views/AboutPage/AboutPage.js"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={LandingPage} />
      <Route path="/albums" component={AlbumsPage} />
      <Route path="/videos" component={VideosPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/photos/:id" component={PictureGallary} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
