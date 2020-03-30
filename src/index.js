import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import AlbumsPage from "views/AlbumsPage/AlbumsPage.js";
import PictureGallary from "components/PictureGallary/PictureGallary";

var hist = createBrowserHistory();
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/albums-page" component={AlbumsPage} />
      <Route path="/login-page" component={LandingPage} />
      <Route path="/gallary-page/:id" component={PictureGallary} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
