import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default () =>
  <div className="NotFound">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Lemon & Lavender</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="About">About Us</Nav.Link>
          <Nav.Link href="Services">Services</Nav.Link>
          <Nav.Link href="FAQ">FAQ</Nav.Link>
          <Nav.Link href="Contact">Contact</Nav.Link>
        </Nav>
        <Nav.Link align="right" target="_blank" href="https://clienthub.getjobber.com/client_hubs/1b9e11c8-454b-4e4d-9eb9-268c0803eaa6/public/work_request/new">
          <Button variant="primary">Request a Quote</Button>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
    <h3>Sorry, page not found!</h3>
  </div>;

