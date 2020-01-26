import React from "react";
import "./Card.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSelection: true,
      secondSelection: false,
      thirdSelection: false,
      firstValue: ""
    };
  }
  onChange = e => {
    // eslint-disable-next-line
    const selectedVal = parseInt(e.target.value);
    this.setState({ firstValue: selectedVal });
    this.setState({ secondSelection: true, firstSelection: false });
    this.setState({ secondSelection: true });
  };

  render() {
    if (this.state.firstSelection) {
      return (
        <div className="card">
          <h3 className="card-h3">I am a ...</h3>
          <br />
          <select onChange={this.onChange} className="card-select">
            <option>...</option>
            <option value="20">College Student</option>
            <option value="30">Disaster Victim</option>
            <option value="40">Person ready to to improve my situation</option>
          </select>
          <p>{this.state.firstSelection}</p>
        </div>
      );
    } else if (this.state.secondSelection) {
      return (
        <div className="card">
          <h3 className="card-h3">I want ... / My goals are ...</h3>
          <br />
          <select onChange={this.onChange} className="card-select">
            <option>...</option>
            <option value="20">Better Financial Status</option>
            <option value="30">More Skills</option>
            <option value="40">Finding a job</option>
            <option value="40">Finding basic neccesseties</option>
          </select>
        </div>
      );
    }
  }
}

export default Card;
