import React from "react";
import { Link } from "react-router-dom";

function navbar(props) {
  console.log(props);

  function logOutUser(){
    
  }

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="collapse navbar-collapse"></div>
      {props.isloggedin ? (
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <button className='nav-link' onClick={logOutUser}>Logout</button>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Log In
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/restaurants/add" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default navbar;
