import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './components/navbar';
import createUser from './components/CreateUser';
import menuList from './components/menus';
import menu from './components/menu';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br />
        <Route path="/" exact component={menuList} />
        <Route path="/menus/:id" exact component={menu} />
        <Route path="/users/add" exact component={createUser} />
      </div>
    </Router>
  );
}

export default App;
