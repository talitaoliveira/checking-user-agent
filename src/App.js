import React from "react";
import Users from "./components/Pages/Users/Users";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";

import { Link, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
        <div>
            <h1>Meu App teste</h1>
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/users">Users</Link>
                </li>
            </ul>
            </nav>
        </div>
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
  );
};

export default App;
