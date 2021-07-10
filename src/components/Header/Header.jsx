import React from "react";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "96px",
  },
  marLeft: {
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
    },[theme.breakpoints.up("sm")]: {
      margin: theme.spacing(0, 0, 0, 5),
    }
  },
  root: {    
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "start",
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary">
      <div className={classes.root}>
        <Link to="/" className={classes.marLeft}>
          <img
            src="/images/misc/Logo.svg"
            alt="PCBuffet Logo"
            className={classes.image}
          />
        </Link>
      </div>
    </AppBar>
  );
}

export default Header;
