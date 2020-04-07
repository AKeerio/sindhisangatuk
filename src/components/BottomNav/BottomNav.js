import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 4,
    background: "linear-gradient(45deg, rgba(255,144,103,1) 0%, rgba(252,156,0,1) 55%, rgba(255,235,0,1) 99%)",
    boxShadow: "0px -5px 17px -5px rgba(0,0,0,0.75)",
    color: "white",
    paddingTop: 10,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/home"
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/albums"
        label="Photos"
        icon={<PhotoLibraryIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/videos"
        label="Videos"
        icon={<VideoLibraryIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/home"
        href="/home"
        label="About"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  );
}
