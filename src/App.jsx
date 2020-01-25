import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="background">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
