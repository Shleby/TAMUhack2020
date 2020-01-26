import React from "react";
import Header from "../components/Header";
import "./Data.css";
class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: true };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <div className="Data">
          <Header className="stick" />
        </div>
      </div>
    );
  }
}

export default Data;
