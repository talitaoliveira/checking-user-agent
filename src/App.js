import React from "react";
import Header from "./components/Header/Header";
import Users from "./components/Pages/Users/Users";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
