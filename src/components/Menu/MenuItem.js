import React from "react";

// import "./Menu.css";

const MenuItem = (props) => (
  <div className="starters-container">
    <h4>{props.data.name}</h4>
    <h4 id="starter-desc">{props.data.description}</h4>
    <h4>€{props.data.cost}</h4>
  </div>
);

export default MenuItem;
