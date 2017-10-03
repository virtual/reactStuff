//create or use two react components you have built. nest one inside the other. 
//In the top most component, pass a 'prop' into it and display that 'prop'
//in the bottom component. You'll probably need to look this up

import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

class Star extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <p>🌠 Super stahhhh! 🌠</p>
    )
  }
}
class Venus extends Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div>
        🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌
        <Star/>

      </div>
    )
  }
}

export default Venus;


