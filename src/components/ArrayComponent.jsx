import React from "react";

class ArrayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valOne: props.firstValue,
      valTwo: props.secondVal
    };
  }
  render() {
    // eslint-disable-next-line
    if (this.state.valOne == "20" && this.state.valTwo == "60") {
      return (
        <p>
          You have indicated that you are a college student looking to take your
          <b>Next Steps</b> torwards a better financial status.
        </p>
      ); // eslint-disable-next-line
    } else if (this.state.valOne == "20" && this.state.valTwo == "70") {
      return (
        <p>
          You have indicated that you are a college student looking to take your
          <b>Next Steps</b> torwards obtaining more skills.
        </p>
      ); // eslint-disable-next-line
    } else if (this.state.valOne == "20" && this.state.valTwo == "80") {
      return (
        <p>
          You have indicated that you are a college student looking to take your
          <b>Next Steps</b> torwards finding a better job.
        </p>
      ); // eslint-disable-next-line
    } else if (this.state.valOne == "30" && this.state.valTwo == "90") {
      return (
        <p>
          You have indicated that you are a victim of a disaster looking to take
          your <b>Next Steps</b> torwards finding local neccesseties.
        </p>
      ); // eslint-disable-next-line
    } else if (this.state.valOne == "30" && this.state.valTwo == "100") {
      return (
        <p>
          You have indicated that you are a victim of a disaster looking to take
          your <b>Next Steps</b> torwards finding local shelters.
        </p>
      ); // eslint-disable-next-line
    } else if (this.state.valOne == "30" && this.state.valTwo == "100") {
      return (
        <p>
          You have indicated that you are a victim of a disaster looking to take
          your <b>Next Steps</b> torwards finding Missing Persons/filing Missing
          Persons Report.
        </p>
      ); // eslint-disable-next-line
    } else if (this.state.valOne == "40" && this.state.valTwo == "120") {
      return (
        <p>
          You have indicated that you are a victim of a abuse looking to take
          your <b>Next Steps</b> torwards filing a Report.
        </p>
      ); // eslint-disable-next-line
    } else if (this.state.valOne == "40" && this.state.valTwo == "130") {
      return (
        <p>
          You have indicated that you are a victim of a abuse looking to take
          your <b>Next Steps</b> torwards seeking physical and/or mental
          recovery.
        </p>
      ); // eslint-disable-next-line
    } else if (this.state.valOne == "40" && this.state.valTwo == "140") {
      return (
        <p>
          You have indicated that you are a victim of a abuse looking to take
          your <b>Next Steps</b> torwards finding employment.
        </p>
      ); // eslint-disable-next-line
    } else if (this.state.valOne == "40" && this.state.valTwo == "120") {
      return (
        <p>
          You have indicated that you are a victim of a abuse looking to take
          your <b>Next Steps</b> torwards finding Missing Persons/filing Missing
          Persons Report.
        </p>
      );
    } // eslint-disable-next-line
    if (this.state.valOne == "50" && this.state.valTwo == "60") {
      return (
        <p>
          You have indicated that you are ready to take your
          <b>Next Steps</b> torwards a better financial status.
        </p>
      ); // eslint-disable-next-line
    } else if (this.state.valOne == "50" && this.state.valTwo == "70") {
      return (
        <p>
          You have indicated that you are ready to take your
          <b>Next Steps</b> torwards obtaining more skills.
        </p>
      ); // eslint-disable-next-line
    } else if (this.state.valOne == "50" && this.state.valTwo == "80") {
      return (
        <p>
          You have indicated that you are ready to take your
          <b>Next Steps</b> torwards finding a better job.
        </p>
      ); // eslint-disable-next-line
    } else if (this.state.valOne == "50" && this.state.valTwo == "150") {
      return (
        <p>
          You have indicated that you are ready to take your
          <b>Next Steps</b> torwards devloping some winning mindsets.
        </p>
      );
    }
  }
}

export default ArrayComponent;
