import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import AlbumsPage from "views/AlbumsPage/AlbumsPage.js";
import PictureGallary from "components/PictureGallary/PictureGallary";
import VideoGallary from "components/VideoGallary/VideoGallary";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={LandingPage} />
      <Route path="/albums" component={AlbumsPage} />
      <Route path="/videos" component={VideoGallary} />
      <Route path="/photos/:id" component={PictureGallary} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
