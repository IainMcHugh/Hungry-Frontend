const isLoggedInReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      state = action.payload;
    case "LOGOUT":
      state = action.payload;
  }
  return state;
};

export default isLoggedInReducer;
