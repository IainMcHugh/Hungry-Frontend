import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(">Store Updated: ", store.getState()));

// Dispatch --> Dispatches action to reducer

// store.dispatch(login);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
