import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dash from "./components/Dash/Dash";
import Menu from "./components/Menu/Menu";

import { login, logout } from "./actions";
import Home from "./components/Home/Home";
import Hungry from "./components/Hungry/Hungry"

function App() {
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const dispatch = useDispatch();

  function loginUser() {
    dispatch(login());
  }

  function logoutUser() {
    localStorage.removeItem("jwtToken");
    dispatch(logout());
  }

  useEffect(()=> {
    if(localStorage.getItem("jwtToken")){
      dispatch(login());
    } else {
      dispatch(logout());
    }
  },[])

  return (
    <Router>
      <div className="container">
        <Header isloggedin={isLoggedInReducer} logout={logoutUser} />
        <Route path="/dash" exact component={Dash} />
        <Route path="/menu" exact component={Menu} />

        {/* Logged out routes */}
        <Route path="/" exact component={Hungry} />
        {/* <Route path="/home" exact component={Home} /> */}
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
      </div>
    </Router>
  );
}

export default App;
