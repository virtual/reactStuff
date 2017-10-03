//find and edit the index.html file to include bootstrap
//add a navbar to the application, but do it within a react component
import React, { Component } from 'react'; 
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';

class NavbarCustom extends Component {
  constructor(){
    super();

  }
  render(){
    return(
      <Navbar inverse collapseOnSelect>
        <NavbarHeader>
        <NavbarBrand>
        <a href="#">This is painful.</a>
      </NavbarBrand> 
      </NavbarHeader>
      
      <Nav right eventKey={0}>
        <form className='navbar-form' action="">
        
        <FormGroup
          controlId="formBasicText"
           >
             <FormControl
            type="text"
        
          />
          <FormControl.Feedback />
        </FormGroup>
           <Button bsStyle='success' type='submit'>Sign in</Button>
        </form>
      </Nav>
    </Navbar>

    )
  }

}
export default NavbarCustom;
