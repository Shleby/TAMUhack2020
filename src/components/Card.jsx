import React from "react";
import "./Card.css";
// eslint-disable-next-line
import ArrayComponent from "../components/ArrayComponent";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSelection: true,
      secondSelection: false,
      thirdSelection: false,
      firstValue: "",
      secondValue: "",
      thirdValue: ""
    };
  }
  onChange = e => {
    // eslint-disable-next-line
    const selectedVal = parseInt(e.target.value);
    this.setState({ firstValue: selectedVal });
    this.setState({ secondSelection: true, firstSelection: false });
    this.setState({ secondSelection: true });
  };

  onSecondChange = e => {
    // eslint-disable-next-line
    const secondVal = parseInt(e.target.value);
    this.setState({ secondValue: secondVal });
    this.setState({ secondSelection: false, thirdSelection: true });
    this.setState({ thirdSelection: true });
  };
  render() {
    if (this.state.firstSelection) {
      return (
        <div className="card">
          <h3 className="card-h3">I am a ...</h3>
          <br />
          <select onChange={this.onChange} className="card-select">
            <option selected>Select...</option>
            <option value="20">College Student</option>
            <option value="30">Victim of Disaster</option>
            <option value="40">Victim of Abuse</option>
            <option value="50">Person ready to to improve my situation</option>
          </select>
        </div>
      ); // eslint-disable-next-line
    } else if (this.state.secondSelection && this.state.firstValue == "20") {
      return (
        <div className="card">
          <h3 className="card-h3">I want ... / My goals are ...</h3>
          <br />
          <select onChange={this.onSecondChange} className="card-select">
            <option selected value="20">
              Select...
            </option>
            <option value="60">Better Financial Status</option>
            <option value="70">More Skills</option>
            <option value="80">Finding a job</option>
          </select>
        </div>
      ); // eslint-disable-next-line
    } else if (this.state.secondSelection && this.state.firstValue == "30") {
      return (
        <div className="card">
          <h3 className="card-h3">I want ... / My goals are ...</h3>
          <br />
          <select onChange={this.onSecondChange} className="card-select">
            <option selected value="30">
              Select...
            </option>
            <option value="90">Find Local neccesseties</option>
            <option value="100">Find Local Shelters</option>
            <option value="110">
              Find Missing Persons/File Missing Persons Report
            </option>
          </select>
        </div>
      ); // eslint-disable-next-line
    } else if (this.state.secondSelection && this.state.firstValue == "40") {
      return (
        <div className="card">
          <h3 className="card-h3">I want ... / My goals are ...</h3>
          <br />
          <select onChange={this.onSecondChange} className="card-select">
            <option selected value="40">
              Select...
            </option>
            <option value="120">File a Report</option>
            <option value="130">Seek Physical and Mental Recovery</option>
            <option value="140">Find Empowerment</option>
          </select>
        </div>
      ); // eslint-disable-next-line
    } else if (this.state.secondSelection && this.state.firstValue == "50") {
      return (
        <div className="card">
          <h3 className="card-h3">I want ... / My goals are ...</h3>
          <br />
          <select onChange={this.onSecondChange} className="card-select">
            <option selected value="50">
              Select...
            </option>
            <option value="60">Better Financial Status</option>
            <option value="70">More Skills</option>
            <option value="80">Finding a job</option>
            <option value="150">Developing Winning Mindsets</option>
          </select>
        </div>
      );
    } else if (this.state.thirdSelection) {
      return (
        <div className="card">
          {/* <ArrayComponent
            arrayProps={(this.state.firstValue, this.state.secondVal)}
          /> */}
          <p>
            Your <b>Next Steps</b> are being analyzed. Be with you shortly.
          </p>
        </div>
      );
    }
  }
}

export default Card;
