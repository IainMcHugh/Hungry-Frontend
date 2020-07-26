import React, { useState } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";
import { login } from "../../actions";

function Login(props) {
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
        const token = res;
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
    <div>
      <h3>Log in!</h3>
      <form onSubmit={loginRestaurant}>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            required
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password: </label>
          <input
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
    </div>
  );
}

export default Login;
