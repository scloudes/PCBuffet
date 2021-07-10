import React from "react";
import App from "./App";
import "./index.css";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

const selectedCategory = localStorage.getItem("selectedCategory");

const initialState = selectedCategory
  ? JSON.parse(selectedCategory)
  : {
      category: null,
      questions: null,
    };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
