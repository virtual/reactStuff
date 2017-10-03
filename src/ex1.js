//in this file, create a react component that solves the following 
//javascript problems in the construtor function and then sets
//the solution in a component template as dictated
//and then have the application use the component. 
import React, { Component } from 'react';
import Venus from "./props.js";
class JSProblems extends Component {
  constructor() {
    super();
    
    let daysUntil = (day)=> {
      let today = new Date();
      console.log(today);
      let lastDay = new Date(day);
      console.log (lastDay);
      var timeDiff = Math.abs(today.getTime() - lastDay.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      return diffDays;
    }
    this.daysLeft = daysUntil("12/08/2017") + " days left of school";
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="counter">
          { this.daysLeft }
          <Venus />
        </div> 
      </div> 
      
      
    )
  }
}

class Menu extends Component {
  constructor(){
    super();
    this.menuitems = {"menu": {
      "id": "file",
      "value": "File",
      "popup": {
        "menuitem": [
          {"value": "New", 
          "onclick": "CreateNewDoc()"},
          {"value": "Open", 
          "onclick": "OpenDoc()"},
          {"value": "Close", 
          "onclick": "CloseDoc()"}
        ]
      }
    }};
  }
  render(){
    var items = [];
    this.menuitems.menu.popup.menuitem.forEach(function(item) {
      items.push(<li>{item.value}</li>);
    });

    var sum = [1, 2, 9].reduce(
      function (
        accumulator,
        currentValue
      ) {
        return accumulator * currentValue;
      }
    );
    return(
      <div>
        <h3>Items!</h3>
        <ul>
        {items}
        </ul>
        {sum}
      
      </div>
    )
  }
  
}

class ItemList extends Component {
  constructor(){
    super();
    //console.log(JSON.stringify(this.props));
    //this.props.value;
  }
  render(){
    return(
      <li>{this.value}</li>
    )
  }
}
export default JSProblems;
//1)write a javascript function that gets the number of days from now
//until the end of class. Write the number of days in your react html.
//2)using the object:
/*{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", 
      "onclick": "CreateNewDoc()"},
      {"value": "Open", 
      "onclick": "OpenDoc()"},
      {"value": "Close", 
      "onclick": "CloseDoc()"}
    ]
  }
}}*/

//go through each menuitem and display the "value" in your react html

//3 using the reduce function, multiply all the values in the array [1,2,9]. Display 
//the end product in your react html

