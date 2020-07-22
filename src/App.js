import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './components/navbar';
import CreateRestaurant from './components/CreateRestaurant';
import menu from './components/menu';

function App() {
  // check if user is logged in, ternary operator
  
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br />
        <Route path="/menus/:id" exact component={menu} />
        <Route path="/restaurants/add" exact component={CreateRestaurant} />
      </div>
    </Router>
  );
}

export default App;
