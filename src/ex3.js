//using react components, create a 3 x 3 table,  where each cell in the table
//contains a react component that displays the integers 1 - 9 like this:
//1 2 3
//3 4 5
//6 7 8
import React, { Component } from 'react';

class Table extends Component {
  constructor(){
    super();
  }
   render(){
     var nums = [[1,2,3],[4,5,6],[7,8,9], [10,11,12]];
     var trHTML = [];
     nums.forEach(function(e, i) {
      trHTML.push(<Row array={e}></Row>); 
    });
     return(
      <table className="table table-striped table-bordered"> 
        <tbody>
          {trHTML}
        </tbody>
      </table>
     )
   } 
}

class Row extends Component {
  constructor(){
    super();
    //console.log(this.props.array);

  }
  componentDidMount() {
    //console.log(this.props.array);

  }

   render(){
    var nums = this.props.array;
    var trHTML = [];
    nums.forEach(function(e, i) {
     trHTML.push(<Cell array={e}></Cell>);
    });
     return(
        
      <tr>
        {trHTML}
      </tr>
     )
   } 
}

class Cell extends Component {
  constructor(){
    super();
  }
  componentDidMount() {
    //console.log(this.props.array);

  }
   render(){
    var nums = this.props.array;
    /*var trHTML = [];
    nums.forEach(function(e, i) {
     trHTML.push(<Cell array={e}></Cell>);
    });*/
    var htmlNum = nums;
     return(
      <td>
       {htmlNum}
      </td>
     )
   } 
}

export default Table;