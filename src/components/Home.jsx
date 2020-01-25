import React from 'react';
import logo from '../LOGO.svg';

class Home extends React.Component {
    render() {
        return(
            <div className="App">
                <div className="App-eheader">
                    <h3>Important:if you or someone you know is in a life-threatening situation, call[location_based_number]</h3>
                </div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Next Steps</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Home;
