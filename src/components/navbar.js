import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="collapse navbar-collapse"></div>
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
    </nav>
  );
}

export default navbar;
