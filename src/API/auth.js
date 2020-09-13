import axios from "axios";

const loginWithEmailAndPassword = (email, password) => {
  return axios
    .post("http://localhost:4000/restaurants/login", { email, password })
    .then((res) => {
      console.log(`>loginWithEmailAndPassword response returned:`);
      console.log(res);
      const token = res.headers.authorisation;
      localStorage.setItem("jwtToken", token);
    })
    .catch((err) => {
      console.log(`>loginWithEmailAndPassword response error: ${err.message}`);
      throw(err.message);
    });
};

const registerWithEmailAndPassword = (details) => {
  return axios
    .post("http://localhost:4000/restaurants/register", details)
    .then((res) => {
      const token = res.headers.authorisation;
      localStorage.setItem("jwtToken", token);
    })
    .catch((err) => console.log(err));
};

export { loginWithEmailAndPassword, registerWithEmailAndPassword };
