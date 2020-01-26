import React from "react";
import { Link } from "react-router-dom";
import logo from "../LOGO.svg";

import "./volunteer.css";

class volunteer extends React.Component {
  render() {
    return (
      <div className="header">
        <Link className="link" to="/">
          <img src={logo} className="logo" alt="logo" />
          <h2 className="next">Next Steps</h2>
          <p>We're Here to Help</p>
        </Link>
        <Link to="/about/">
          <h2 className="h2">About Us</h2>
        </Link>
        <Link to="/volunteer/">
          <h2 className="h2">volunteer</h2>
        </Link>
        
        
        <br></br>
        <div className="box2">

     <br></br><br></br>
     <h13>Volunteer/Donation Interest Form</h13>

     <br></br><br></br>
     <h12>Full Name </h12>
    <h><input></input></h>

    <br></br><br></br>
    <h12>Birth Date </h12>
    <h><input></input></h> 

    <br></br><br></br>
    <h12>Email </h12>
    <h><input></input></h> 

    <br></br><br></br>
    <h12>Address </h12>
    <h><input></input></h>

    <br></br><br></br>
    <h12>Volunteer Interest? </h12>
    <h><input></input></h>  

    <br></br><br></br>
    <h12>Donation Interest? </h12>
    <h><input></input></h> 

    <br></br><br></br>
    <h12>Availability if Volunteering </h12>
    <h><input></input></h> 

     </div>
      </div>
    
    );
  }
}

export default volunteer;
