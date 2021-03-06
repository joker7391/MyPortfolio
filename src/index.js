import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import WebFont from "webfontloader";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/configureStore";

WebFont.load({
  google: {
    families: ["Poppins:300,600", "sans-serif"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
