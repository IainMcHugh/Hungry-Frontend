import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import PeopleIcon from "@material-ui/icons/People";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import BarChartIcon from "@material-ui/icons/BarChart";

const drawerIcon = (index) => {
    switch (index) {
      case 0:
        return <DashboardIcon />;
        break;
      case 1:
        return <MenuBookIcon />;
        break;
      case 2:
        return <FastfoodIcon />;
        break;
      case 3:
        return <PeopleIcon />;
        break;
      case 4:
        return <CreditCardIcon />;
        break;
      case 5:
        return <CalendarTodayIcon />;
        break;
      case 6:
        return <ViewQuiltIcon />;
        break;
      case 7:
        return <BarChartIcon />;
        break;
      default:
        return <DashboardIcon />;
    }
  };

  export {drawerIcon}