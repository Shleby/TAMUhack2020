import React from 'react';
import logo from '../LOGO.svg';
import "./Home.css"
import Popup from './Popup';


class Home extends React.Component {
    constructor(props){  
  super(props);  
  this.state = { showPopup: true };  
  }  

    togglePopup() {  
        this.setState({  
       showPopup: !this.state.showPopup  
        });  
   }  
  
    render() {
        return(
            <div>
            <div>  
               
                {/* popup*/}
                   
            
                {this.state.showPopup ?  
            <Popup  
                      text='Click "Close Button" to hide popup'  
                      closePopup={this.togglePopup.bind(this)}  
            />  
            : null  
            }  
            </div>  
             <div className="Home">
               
                <div className="Home-header">
                    <img src={logo} className="Home-logo" alt="logo" />
                    <h2>Next Steps</h2>
                </div>
               
            </div>
            </div>
        )
    }
}







export default Home;
