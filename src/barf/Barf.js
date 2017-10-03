import React, { Component } from 'react';
import './Barf.css';
import Venus from "../props.js";
//Create another react component the same way as you did before
//This time, we're going to use this component WITHIN your other 
//component - that's right, we can nest components. Call the component
// "Barf"
class Barf extends Component {
  constructor(){
    super();

  }

  render() {
    return (
      <div>
        <p className="lead">Unicorns have ruled the world <strong className="emph">forever!</strong></p>
        <img src="http://cliparting.com/wp-content/uploads/2016/06/Unicorn-barfing-rainbows-clipart.jpg" alt="Unicorn barfing rainbows"/>
        <Venus/>
      </div>
    )
  }
}
export default Barf;
//export it in this file, then import it into your index.js file and put the tag
//inside the div's in your render method and viola! 
