import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Barf from "./barf/Barf.js";
import App from "./app/App.js";
import JSProblems from "./ex1.js";
import Venus from "./props.js";
import Tacos from "./tacos.js";
import Table from "./ex3.js";
import Navvy from "./navbar2.js";
import 'bootstrap/dist/css/bootstrap.css';
//Lets build yer first react component! Woo hoo!!!!!
//At it's essence a react 'component' is simply a
//function that has a render method that returns the following:
//( 
//  <div>
//  </div>
//)

//that's it, really. So lets make one
//step 1: build a class, call it w/e you want
//step 2: make it a subclass of "React.Component"
//step 3: give it a render() method
//return that thing above, including the parentheses

class Unicorns extends Component {
  constructor(){
    super();
  }
  render(){
    return (
    <div>
      <Navvy/> 
      <h1>Space Unicorns</h1>
      <Venus />
      <Barf />
      <Table/>
      <App />
      <JSProblems />
      <Tacos/>
    </div>
    )
  }
}

export default Unicorns;

//but we need to get this puppy working with the html. Below is a way to 
//inject a component into html
ReactDOM.render(< Unicorns />, document.getElementById('root'));
//step 4: insert your class name where it says "insert class here". Find the index.html file
//and select an id to attach your react to.
//the second arg of ReactDOM.render is your familiar document.getElementById(). Use the id you just
//selected. 
//Your app should refresh itself - check it out, in theory you got a working react 
//component
