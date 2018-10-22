import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

require("react-bootstrap/lib/NavbarHeader");

function Header() {

    return (
           <div>
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                  <Link to="/">Home</Link>
                  </Navbar.Brand>
                  <Navbar.Brand>
                  <Link to="/about" >About</Link>
                  </Navbar.Brand>
                  <Navbar.Brand>
                  <Link to="/contact">Contact</Link>
                  </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
           </div>          
        
    )
}

export default Header;