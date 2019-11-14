import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Tracker from "./components/tracker.jsx";
import NewApplication from "./components/newApplication";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const app = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Tracker} />
      <Route path="/newapp" exact component={NewApplication} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
