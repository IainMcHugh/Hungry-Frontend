import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

import "./Navbar.css";

const Navbar = (props) => {
  console.log(props);
  const history = useHistory();

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
    <nav className="navbar-container">
      {/* <div className=""></div> */}
      {props.isloggedin ? (
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <button className="navbar-logout" onClick={logOutUser}>
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Hungry
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/restaurants/login" className="navbar-link">
              Sign In
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/restaurants/add" className="navbar-link">
              Register
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
