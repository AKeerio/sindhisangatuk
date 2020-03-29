import React, { Fragment } from 'react';
import Media from 'react-media';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Danger from "components/Typography/Danger.js";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Logo from "components/Logo/Logo.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import Gallary from 'components/Gallary/Gallary.js';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="warning"
        routes={dashboardRoutes}
        brand="Sindhi Sangat UK"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
         /*color: "white"*/
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/cover3.png")}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Logo />
            </GridItem>
          </GridContainer>
          
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
              }}>
                {matches => (
                  <Fragment>
                    {matches.large &&  <h1 className={classes.title}>Sindhi Sangat United Kingdom</h1>}
                    {matches.medium && <h2 className={classes.title}>Sindhi Sangat United Kingdom</h2>}
                    {matches.small &&  <h3 className={classes.title}>Sindhi Sangat United Kingdom</h3>}
                  </Fragment>
                )}
              </Media>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Button
                color="warning"
                size="lg"
                href="https://www.youtube.com/watch?v=2c_YmxagxNo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Gallary />
        </div>
      </div>
      <Footer />
    </div>
  );
}
