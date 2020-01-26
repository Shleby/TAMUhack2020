import React from 'react';
import logo from '../LOGO.svg';

import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
                <h2>Next Steps</h2>
            </div>
        );
    }
}

export default Header;
