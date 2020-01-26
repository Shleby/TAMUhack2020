import React from "react";
import Header from "../components/Header";
import "./volunteer.css";

class volunteer extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <div className="box2">
          
          <br></br>
          <h13>Volunteer/Donation Interest Form</h13>

          <br></br>
          <br></br>
          <h12>Full Name </h12>
          <h>
            <input></input>
          </h>

          <br></br>
          <br></br>
          <h12>Birth Date </h12>
          <h>
            <input></input>
          </h>

          <br></br>
          <br></br>
          <h12>Email </h12>
          <h>
            <input></input>
          </h>

          <br></br>
          <br></br>
          <h12>Address </h12>
          <h>
            <input></input>
          </h>

          <br></br>
          <br></br>
          <h12>Volunteer Interest? </h12>
          <h>
            <input></input>
          </h>

          <br></br>
          <br></br>
          <h12>Donation Interest? </h12>
          <h>
            <input></input>
          </h>

          <br></br>
          <br></br>
          <h12>Availability if Volunteering </h12>
          <h>
            <input></input>
          </h>
        </div>
      </div>
    );
  }
}

export default volunteer;
