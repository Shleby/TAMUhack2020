import React from "react";
import { Link } from "react-router-dom";
import logo from "../LOGO.svg";

<<<<<<< HEAD
import './Header.css';
class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            location: [
                {
                    id: 0,
                    title: 'ENG',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 1,
                    title: 'ESP',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 2,
                    title: 'JPN',
                    selected: false,
                    key: 'location' 
                },
                {
                    id: 3,
                    title: 'CHN',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 4,
                    title: 'VNM',
                    selected: false,
                    key: 'location'
                }
            ]
        }
    }    
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
                <Link to="/language/">
                    <h2>Language</h2>
                </Link>
<div className="dd-wrapper">
    <div className="dd-header">
        <div className="dd-header-title"></div>
    </div>
    <ul className="dd-list">
        <li className="dd-list-item"></li>
        <li className="dd-list-item"></li>
        <li className="dd-list-item"></li>
    </ul>
</div>
            </div>
        );
    }
=======
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Next Steps</h1>
        <p>We're Here to Help</p>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/about/">
          <h2>About Us</h2>
        </Link>
        <Link to="/resources/">
          <h2>Resources</h2>
        </Link>
        <select>
          <option value="EN">EN</option>
        </select>
      </div>
    );
  }
>>>>>>> c760b1730e0665819fd56501112b9914cb3b5438
}

export default Header;
