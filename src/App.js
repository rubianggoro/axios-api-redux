import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import DataApi from "./Pages/DataApi";
import CountryApi from "./Pages/CountryApi";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DataApi />
        </Route>
        <Route exact path="/country">
          <CountryApi />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
