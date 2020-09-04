import React, { useState } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";
import { login } from "../../actions";

import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [license, setLicense] = useState("");
  const [password, setPassword] = useState("");

  const loginRestaurant = (e) => {
    e.preventDefault();
    const loginCredentials = {
      email: email,
      password: password,
    };
    console.log(loginCredentials);

    axios
      .post("http://localhost:4000/restaurants/login", loginCredentials)
      .then((res) => {
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
    history.push("/home");
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
}

export default Login;
