import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">McCord's Taproom</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="https://www.epicodus.com/">Epicodus</Nav.Link>
          <Nav.Link href="https://github.com/dustatron/tap-room-react">Repo Link</Nav.Link>
          <NavDropdown title="Tap Menu" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Cool Stuff</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="https://github.com/dustatron">Github Profile</Nav.Link>
          <Nav.Link href="http://www.dustymccord.com">Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
