import React, { useEffect } from "react";
import axios from "axios";

import "./Home.css";

const Home = () => {
  useEffect(() => {
    // let testData = {token: localStorage.getItem("jwtToken")};
    let token = localStorage.getItem("jwtToken");
    axios
      .post("http://localhost:4000/home", {token})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-container">
      <aside>This is the aside</aside>
      You are at home!
    </div>
  );
};
export default Home;
