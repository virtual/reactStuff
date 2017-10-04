//Using React's state, make a button that increments a counter
import React, {Component} from "react";

export default class Button extends Component{
  constructor(){
    super();
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render(){
    
    return (
      <div className="spaced-out">
        {this.state.counter}<br/>
        <button className="btn btn-primary" onClick={this.increment}>
          Increment
        </button>
      </div>
    )
  }
}