import React, { useState } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";
import { login } from "../../actions";
import { loginWithEmailAndPassword } from "../../API/auth";

import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [license, setLicense] = useState("");
  const [password, setPassword] = useState("");

  const loginRestaurant = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword(email, password).then((_res) => {
      props.login();
      navigateToHome();
    })
    .catch(err => console.log(`>loginWithEmailAndPassword Error: ${err}`));
  };

  const history = useHistory();

  function navigateToHome() {
    history.push("/dash");
  }

  return (
    <div className="login-container">
      <section className="form-container">
        <h3>Login</h3>
        <form onSubmit={loginRestaurant}>
          <div className="login-form">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              required
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
