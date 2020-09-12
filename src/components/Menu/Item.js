import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVert from "@material-ui/icons/MoreVert";

const Item = (props) => {
  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchor(null);
  };
  return (
    <div className="starters-container" key={props.data._id}>
      <h4>{props.data.name}</h4>
      <h4 id="starter-desc">{props.data.description}</h4>
      <h4>€{props.data.cost}</h4>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default Item;
