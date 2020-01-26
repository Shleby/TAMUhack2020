import React from "react";
import Header from "./Header";
import "./Home.css";
import Popup from "./Popup";
import Card from "./Card";
import Memo from "./memo";

class Home extends React.Component {
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
        <div>
          {/* popup*/}

          {this.state.showPopup ? (
            <Popup
              text='Click "Close Button" to hide popup'
              closePopup={this.togglePopup.bind(this)}
            />
          ) : null}
        </div>
        <div className="Home">
          <Header className="stick" />
          <Memo className="memo" />
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;
