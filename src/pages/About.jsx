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
          <h6>Life is intense, and immensely huge. So is the internet--the internet has a LOT of information.</h6><br></br>
          <h6>We provide a novel service to sort through that information to better help you find what </h6>
          <h6>you're looking for. Powered by Microsoft Azure, our powerful search function allows us to </h6>
          <h6>                     refine the search results and sift through all that information.</h6><br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h7>Why We Do It</h7>
          <br></br>
          <br></br>
          <h6>This project was inspired by the Australian bush fires. This seg-wayed us into a wider</h6>
          <h6>view of helping people get back on their feet in a time of crisis. You might ask, </h6>
          <h6>"couln't someone just Google it?" Certainly, and we won't stop you. However if</h6>
          <h6>someone is going through something they find stressful, or if it is something difficult to</h6>
          <h6>confront, it may be tough to sort through all that information to find what you're looking for.</h6>
          
          <h16>Our Product is about bringing people together in times of crisis!</h16>
        </div>
      </div>
    );
  }
}

export default About;
