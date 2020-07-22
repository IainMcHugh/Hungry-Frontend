import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="collapse navbar-collapse"></div>
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">
            MenuList
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/users/add" className="nav-link">
            Create User
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
