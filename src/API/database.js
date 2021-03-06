import axios from "axios";

const getUserMenu = async (token) => {
  return axios
    .post("http://localhost:4000/menu", { token })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

const addMenuItem = async (item) => {
  return axios
    .post("http://localhost:4000/menu/add", item)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export { getUserMenu, addMenuItem };
