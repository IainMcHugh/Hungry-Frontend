import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import menu from "./components/menu";

import { login, logout } from "./actions";
import Home from "./components/Home/Home";

function App() {
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const dispatch = useDispatch();

  function loginUser() {
    dispatch(login());
  }

  function logoutUser() {
    dispatch(logout());
  }

  return (
    <Router>
      <div className="container">
        <NavBar isloggedin={isLoggedInReducer} logout={logoutUser} />
        <Route path="/menus/:id" exact component={menu} />
        <Route
          path="/restaurants/add"
          exact
          component={(props) => <Register {...props} login={loginUser} />}
        />
        <Route
          path="/restaurants/login"
          exact
          component={(props) => <Login {...props} login={loginUser} />}
        />
        <Route path="/home" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
