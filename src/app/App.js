import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Button from 'react-bootstrap/lib/Button';

//Let's use some variables IN THE TEMPLATE WOW OMG GEEZLAWEEZ
//in the app component below, create a constructor function (don't 
//forget to call super() since it's a subclass) that declares a variable 
//spaceDawgz. Set it to some wicked cool value. Then, inject
//this component into the application and notice what happens
//in the app! You can pass in variables into the template the application!


class App extends Component {
constructor(){
  super();
  this.spaceDog = "Saturn";
}
  render() {

    return (
      <div>
        <img src="https://previews.123rf.com/images/xochicalco/xochicalco0906/xochicalco090600004/4981410-Retro-Space-Dog-flies-by-planet-Saturn--Stock-Vector.jpg" alt="Saturn dog" />
        <h2>{this.spaceDog}</h2>
      </div>
    )  
  }
}

export default App;
