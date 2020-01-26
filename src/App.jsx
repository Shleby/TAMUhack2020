import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Volunteer from "./pages/volunteer";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/volunteer" component={Volunteer} />
        </Switch>
      </div>
    );
  }
}

export default App;
