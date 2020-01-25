import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-eheader">
          <h3>Important:if you or someone you know is in a life-threatening situation, call[location_based_number]</h3>
        </div>
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
          <h2>Company</h2>
          <h4>tagline here</h4>
        </div>

      </div>
    );
  }
}

export default App;
