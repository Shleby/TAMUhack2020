import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import logo from "../LOGO.svg";

class About extends React.Component {
  render() {
    return (
      <div className="header2">
        <Link className="link-abt" to="/">
          <img src={logo} className="logo-temp" alt="logo-temp" />
          <h8>
            NextSteps <br></br>
          </h8>
          <h9>We're Here to Help</h9>
        </Link>
        <div className="box">
          <br></br>
          <br></br>
          <br></br>

          <h7>What We Do</h7>
          <br></br>
          <br></br>
          <h6>fsfhshf;ljsahfhsad;fhs;fhljdsahf;salhf;d</h6>
          <h6>fsofsonfsnfosfonsnfsoasdffnsnfosnfosnosnfosnfos</h6>
          <h6>>fnljsfsbjsbflbsfsbflsbflsbflsbflsbfs</h6>
          <h6>kfhsfhsjflshfsjlhfshfljshfjslhflshfs</h6>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h7>Why We Do It</h7>
          <br></br>
          <br></br>
          <h6>fsfhshf;ljsahfhsad;fhs;fhljdsahf;salhf;d</h6>
          <h6>fsofsonfsnfosfonsnfsofnsnfosnfosnosnfosnfos</h6>
          <h6>>fnljsfsbjsbflbsfsbflsbflsbflsbflsbfs</h6>
          <h6>kfhsfhsjflshfsjlhfshfljshfjslhflshfs</h6>
        </div>
      </div>
    );
  }
}

export default About;
