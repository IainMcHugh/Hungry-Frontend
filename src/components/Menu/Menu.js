import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Menu.css";
import MenuItem from "./MenuItem";
import MenuAdd from "./MenuAdd";

const Menu = () => {
  const [auth, setAuth] = useState(false);
  const [menu, setMenu] = useState();
  const [overlay, setOverlay] = useState(false);

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
              <div className="menuitems-container">
              {Object.keys(menu.starters).map((starter) => {
                return (
                  <MenuItem name={starter} data={menu.starters[starter]} />
                );
              })}
              <div className="starters-container_add">
                <button onClick={()=>setOverlay(true)}>Add new</button>
              </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="auth-error">
            <h2>Oops! You need to log in first!</h2>
        </div>
      )}
      {overlay ? <MenuAdd close={()=>setOverlay(false)}/>: null}
    </div>
  );
};

export default Menu;
