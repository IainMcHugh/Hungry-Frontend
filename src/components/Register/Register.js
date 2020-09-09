import React, { useState } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";

import "./Register.css";

const Register = (props) => {
  const [restaurant, setRestaurant] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [license, setLicense] = useState("");
  const [password, setPassword] = useState("");

  const submitCreateRestaurant = (e) => {
    e.preventDefault();
    const newRestaurant = {
      restaurant: restaurant,
      owner: owner,
      email: email,
      license: license,
      password: password,
    };
    console.log(newRestaurant);

    axios
      .post("http://localhost:4000/restaurants/register", newRestaurant)
      .then((res) => {
        console.log("Token res");
        // console.log(res.data);
        // const token = res.data.token;
        const token = res.headers.authorisation;
        localStorage.setItem("jwtToken", token);
        props.login();
        console.log(props);
        navigateToHome();
      })
      .catch((err) => console.log(err));
  };

  const history = useHistory();

  function navigateToHome() {
    history.push("/dash");
  }

  return (
    <div className="register-container">
      <section className="form-container">
        <h3>Join Today!</h3>
        <form onSubmit={submitCreateRestaurant}>
          <div className="register-form">
            <label htmlFor="restaurant">Restaurant Name: </label>
            <input
              name="restaurant"
              required
              className="form-control"
              value={restaurant}
              onChange={(e) => setRestaurant(e.target.value)}
            />
            <label htmlFor="owner">Account Holder: </label>
            <input
            type="text"
              name="owner"
              required
              className="form-control"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
            <label htmlFor="email">Email: </label>
            <input
            type="email"
              name="email"
              required
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="license">Restaurant License: </label>
            <input
            type="text"
              name="license"
              required
              className="form-control"
              value={license}
              onChange={(e) => setLicense(e.target.value)}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              required
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-primary my-2">
              Add your Restaurant
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
