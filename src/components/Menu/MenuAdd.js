import React, { useState } from "react";
import { addMenuItem } from "../../API/database";

import { useDispatch } from "react-redux";
import { menuUpdate } from "../../actions";

import "./Menu.css";

const MenuAdd = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [kcal, setKcal] = useState(0);
  // const [allergens, setAllergens] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // prevent reload
    e.preventDefault();
    // Form error checks

    // post form to backend
    const item = {
      menuid: props.menuid,
      item: { name, description, cost, allergens: [], kcal },
    };
    addMenuItem(item).then(result => {
      console.log(result);
      dispatch(menuUpdate(result.data));
    });
    // close form
    props.close();
  };

  return (
    <div className="form-wrapper">
      <h2>Add item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="..."
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="cost">Cost(euro)</label>
        <input
          type="text"
          name="cost"
          id="cost"
          placeholder="..."
          onChange={(e) => setCost(e.target.value)}
        />
        {/* <label htmlFor="allergens">Allergens</label>
        <input
          type="text"
          name="allergens"
          id="allergens"
          placeholder="..."
          onChange={(e) => setAllergens(e.target.value)}
        /> */}
        <label htmlFor="kcal">Kcal</label>
        <input
          type="number"
          name="kcal"
          id="kcal"
          placeholder="..."
          onChange={(e) => setKcal(e.target.value)}
        />
        <div className="form-button-wrapper">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => props.close()}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuAdd;
