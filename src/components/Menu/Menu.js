import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Menu.css";

const Menu = () => {
  const [auth, setAuth] = useState(false);
  const [menu, setMenu] = useState();
  useEffect(() => {
    let token = localStorage.getItem("jwtToken");
    if (!token) {
      setAuth(false);
    } else {
      setAuth(true);
      axios
        .post("http://localhost:4000/menu", { token })
        .then((res) => {
          console.log(res.data);
          setMenu(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="menu-wrapper">
      {auth ? (
        <div>
          {menu && (
            <div className="menu-container">
              <h2>{menu.restaurant}</h2>
              <h3>Starters:</h3>
              {Object.keys(menu.starters).map((starter) => {
                return (
                  <div className="starters-container">
                    <h4>{starter}</h4>
                    <h4 id="starter-desc">
                      {menu.starters[starter].description}
                    </h4>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="auth-error">
            <h2>Oops! You need to log in first!</h2>
        </div>
      )}
    </div>
  );
};

export default Menu;
