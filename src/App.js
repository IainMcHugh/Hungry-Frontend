import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar";
import CreateRestaurant from "./components/CreateRestaurant";
import menu from "./components/menu";

import { login } from "./actions";
import Home from "./components/Home";

function App() {
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const dispatch = useDispatch();

  // check if user is logged in, ternary operator
  // const [user, setUser] = useState(false);
  // useEffect(() => {
  //   if(localStorage.getItem('jwtToken') == undefined) {
  //     console.log(localStorage.getItem('jwtToken'));
  //     setUser(true);
  //   } else {
  //     setUser(false);
  //   }

  // }, []);

  function loginUser() {
    dispatch(login());
  }

  return (
    <Router>
      <div className="container">
        <NavBar login={isLoggedInReducer}/>
        <br />
        <Route path="/menus/:id" exact component={menu} />
        <Route
          path="/restaurants/add"
          exact
          component={(props) => <CreateRestaurant {...props} login={loginUser} />}
        />

        <Route path="/home" exact component={Home} />
        {/* {isLoggedInReducer ? 
        <div>Logged in</div> 
        :
        
        <div>Logged out</div>
        } */}
      </div>
    </Router>
  );
}

export default App;
