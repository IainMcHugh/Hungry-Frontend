import React, { useState, useEffect } from "react";
import axios from "axios";

// import "./Home.css";

const Home = () => {
  const [menu, setMenu] = useState();
  useEffect(() => {
    let token = localStorage.getItem("jwtToken");
    axios
      .post("http://localhost:4000/home", { token })
      .then((res) => {
        console.log(res.data);
        setMenu(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-container">
      {menu && 
      <div className="menu-container">
        <h2>{menu.restaurant}</h2>
        <h3>Starters:</h3>
        {Object.keys(menu.starters).map(starter => {
          return (
          <div className="starters-container">
            <h4>{starter}</h4>
            <h4 id="starter-desc">{menu.starters[starter].description}</h4>
          </div>
          )
        })}
      </div>
      }
    </div>
  );
};
export default Home;
