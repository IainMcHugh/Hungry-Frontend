import React, { useState, useEffect } from "react";
import { getUserMenu } from "../../API/database";

import { useSelector, useDispatch } from "react-redux";
import { menuCreate } from "../../actions";
import "./Menu.css";
import Item from "./Item";
import MenuAdd from "./MenuAdd";

const Menu = () => {
  const [auth, setAuth] = useState(false);
  const [menu, setMenu] = useState();
  const [overlay, setOverlay] = useState(false);

  const dispatch = useDispatch();

  const reduxMenu = useSelector((state) => state.menuCrudReducer);

  useEffect(() => {
    let token = localStorage.getItem("jwtToken");
    if (!token) {
      setAuth(false);
    } else {
      setAuth(true);
      getUserMenu(token).then((res) => {
        dispatch(menuCreate(res));
        setMenu(res);
      });
    }
  }, []);

  return (
    <div className="menu-wrapper">
      {auth ? (
        <div>
          { reduxMenu && (
            <div className="menu-container">
            <h2>{reduxMenu.restaurant}</h2>
            <h3>Starters:</h3>
            <div className="menuitems-container">
              {reduxMenu.starters.map((starter) => {
                return <Item data={starter} />;
              })}
              <div className="starters-container_add">
                <button onClick={() => setOverlay(true)}>Add new</button>
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
      {overlay ? (
        <MenuAdd menuid={menu._id} close={() => setOverlay(false)} />
      ) : null}
    </div>
  );
};

export default Menu;
