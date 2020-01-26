import React from 'react';  
import './style.css';  

class Popup extends React.Component {  
  render() {  
return (  

<div className='popup'> 
<button className='button' onClick={this.props.closePopup}>X</button>  
<h6>IMPORTANT:if you or someone you know is in a life-threatening situation, call[location_based_number]</h6>  

 
</div> 
);  
}  
}  

export default Popup;