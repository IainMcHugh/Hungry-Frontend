import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import clsx from "clsx";
import HeaderLogout from "./HeaderLogout";
import { drawerIcon } from "./drawerIcon";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#2C75FF",
    color: "#ffffff",
    height: 100,
    justifyContent: "center",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#ffffff",
    color: "#444444",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const drawerItems = [
    "dash",
    "menu",
    "food",
    "access",
    "payments",
    "bookings",
    "layout",
    "stats",
  ];

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const handleListItemClick = (e, index) => {
    console.log(`Index is: ${index}`);
    if (index !== null) {
      const route = drawerItems[index];
      console.log(`Route is: ${route}`);
      history.replace(`/${route}`);
    }
  };

  function logOutUser() {
    Axios.post("http://localhost:4000/restaurants/logout")
      .then((res) => {
        console.log("Logging User out");
        props.logout();
        navigateToRegister();
      })
      .catch((err) => console.log(err));
  }

  function navigateToRegister() {
    history.replace("/restaurants/login");
  }
  return (
    <div>
      {props.isloggedin ? (
        <div className={classes.root}>
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, open && classes.appBarShift)}
          >
            <ToolBar>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleOpenDrawer}
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                Dashboard
              </Typography>
              <IconButton color="inherit" edge="end" onClick={logOutUser}>
                <ExitToAppIcon />
              </IconButton>
            </ToolBar>
          </AppBar>
          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleCloseDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              {drawerItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={(e) =>handleListItemClick(e, index)}
                >
                  <ListItemIcon>{drawerIcon(index)}</ListItemIcon>
                  <ListItemText primary={capitalize(item)} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
      ) : (
        <HeaderLogout />
      )}
    </div>
  );
};

export default Header;
