import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// { type: 'INCREMENT' }
// { count: 0 }

const countReducer = (previousState = 0, { type }) => {
  switch (type) {
    case "INCREMENT":
      return previousState + 1;
    default:
      return previousState;
  }
};

const rootReducer = combineReducers({
  count: countReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
