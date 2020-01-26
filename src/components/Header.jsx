import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../LOGO.svg';

import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
                <h2>Next Steps</h2>
                <Link to="/">
                    <h2>Home</h2>
                </Link>
                <Link to="/about/">
                    <h2>About Us</h2>
                </Link>
                <Link to="/resources/">
                    <h2>Resources</h2>
                </Link>
            </div>
        );
    }
}

export default Header;
