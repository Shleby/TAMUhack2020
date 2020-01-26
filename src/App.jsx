import React, { Component } from "react";
import { Switch, Route } from "react-router-dom"; 
import Home from "./components/Home";
import About from "./components/About";
import volunteer from "./components/volunteer"
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/volunteer" component={volunteer} />
        </Switch>
      </div>
    );
  }
}

export default App;
