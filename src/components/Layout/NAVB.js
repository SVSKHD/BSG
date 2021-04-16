import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {FaGamepad} from "react-icons/fa"
import {Link} from "react-router-dom"


const NAVB = (props) => {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="titletext">
      <Navbar className="rounded" color="light" light expand="md">
        <NavbarBrand className="titletext" href="/">BSG</NavbarBrand>
        <NavbarToggler onClick={toggle}><FaGamepad size={30} /></NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="text-dark" to="/pcbuilds">PC-Builds</Link>
            </NavItem>
     
            <NavItem>
              <Link className="text-dark" to="/mygear">My-gear</Link>
            </NavItem>

            <NavItem>
              <Link className="text-dark" to="/youtubechannel">Youtube-channel</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NAVB;
