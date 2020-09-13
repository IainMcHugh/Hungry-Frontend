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
      throw err;
    });
};

const deleteMenuItem = async (menuid, id) => {
  return axios
    .post("http://localhost:4000/menu/delete", {menuid, id})
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

export { getUserMenu, addMenuItem, deleteMenuItem };
