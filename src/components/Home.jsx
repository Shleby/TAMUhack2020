import React from 'react';
import Header from './Header';

import './Home.css';

class Home extends React.Component {
    render() {
        return(
            <div className="Home">
                <div className="Home-eheader">
                    <h3>Important:if you or someone you know is in a life-threatening situation, call[location_based_number]</h3>
                </div>
                <Header/>
                <p className="Home-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Home;
