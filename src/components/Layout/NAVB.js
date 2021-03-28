import React, { useContext, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  ButtonGroup
} from 'reactstrap';
import {FaGamepad} from "react-icons/fa"
import {Link} from "react-router-dom"
import {UserContext} from "../../context/UserContext"

const NAVB = (props) => {
  const context = useContext(UserContext)
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
          {context.user ? (
          <Nav className="ml-auto">
            <ButtonGroup>
              <Button outline color="dark">{context.user?.email ? context.user.email:""}</Button>
              <Button onClick={()=>{
                context.setUser(null)
              }} outline color="danger">Signout</Button>
            </ButtonGroup>
          </Nav>
          ) : (
            <Nav className="ml-auto">
            <ButtonGroup>
              <Button href="/signin" outline color="success">
                Signin
              </Button>

              <Button href="/signup" color="warning">
                Signup
              </Button>
            </ButtonGroup>
          </Nav> 
          )
          }



        </Collapse>
      </Navbar>
    </div>
  );
}

export default NAVB;
