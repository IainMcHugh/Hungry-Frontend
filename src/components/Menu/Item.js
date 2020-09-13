import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVert from "@material-ui/icons/MoreVert";

import { deleteMenuItem } from "../../API/database";

const Item = (props) => {
  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleEdit = () => {
    console.log(props.data._id);
  };

  const handleDelete = () => {
    console.log(props.data._id);
    // TODO:
    // delete from database
    deleteMenuItem(props.data.menuid, props.data._id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // delete from redux store
  };

  const handleClose = (e) => {
    setAnchor(null);
  };
  return (
    <div className="starters-container">
      <h4>{props.data.name}</h4>
      <h4 id="starter-desc">{props.data.description}</h4>
      <h4>€{props.data.cost}</h4>
      <div className="icon-button">
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVert />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchor}
          keepMounted
          open={Boolean(anchor)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleEdit}>Edit</MenuItem>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Item;
