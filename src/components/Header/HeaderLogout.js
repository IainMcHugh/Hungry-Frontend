import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#444",
    color: "#ffffff",
    height: 100,
    justifyContent: "center",
  },
  title: {
    flexGrow: 1,
    fontSize: 25,
  },
  link: {
    textDecoration: "none",
    textTransform: "capitalize",
    color: "inherit",
    fontSize: 20,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
  },
}));

const HeaderLogout = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <AppBar className={classes.appBar}>
      <ToolBar>
        <Typography className={classes.title} variant="h6">
          Hungry
        </Typography>
        <Button color="inherit" variant="h6">
          <Link className={classes.link} to="/restaurants/login">Sign In</Link>
        </Button>
        <Button color="inherit" variant="h6">
          <Link className={classes.link} to="/restaurants/add">Register</Link>
        </Button>
      </ToolBar>
    </AppBar>
    // <nav className="header-container">
    //   <ul className="header-list">
    //     <li className="header-item">
    //       <Link to="/" className="header-link">
    //         Hungry
    //       </Link>
    //     </li>
    //     <li className="header-item">
    //       <Link to="/restaurants/login" className="header-link">
    //         Sign In
    //       </Link>
    //     </li>
    //     <li className="header-item">
    //       <Link to="/restaurants/add" className="header-link">
    //         Register
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default HeaderLogout;
