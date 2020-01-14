import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../assets/ll-logo.jpg'

import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import MenuIcon from '@material-ui/icons/Menu';
import "./sass/NavBar.scss";


const NavBar = () => {


  return (
    <section>
      <Navbar className="nav-mobile" bg="light" expand="md" fixed="top">
        <Navbar.Toggle className="toggle" aria-controls=""><MenuIcon fontSize="medium" /></Navbar.Toggle>

        <Navbar.Brand className="brand mx-auto" href="/">Lemon & Lavender</Navbar.Brand>

        <Nav.Link target="_blank" href="https://clienthub.getjobber.com/client_hubs/1b9e11c8-454b-4e4d-9eb9-268c0803eaa6/public/work_request/new">
          <FormatQuoteIcon />
        </Nav.Link>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mobileNav">
            <Container>
              <Row>
                <Col>
                </Col>
              </Row>
              <Row className=" ">
                <Col className="">
                  <Nav.Link href="AboutUs">About Us</Nav.Link>
                </Col>
              </Row>
              <Row className="">
                <Col>
                  <Nav.Link href="Services">Services</Nav.Link>
                </Col>
              </Row>
              <Row className="">
                <Col>
                  <Nav.Link href="FAQ">FAQ</Nav.Link>
                </Col>
              </Row>
              <Row className="">
                <Col>
                  <Nav.Link target="_blank" href="https://clienthub.getjobber.com/client_hubs/1b9e11c8-454b-4e4d-9eb9-268c0803eaa6/public/work_request/new"> Request a Quote </Nav.Link>
                </Col>
              </Row>
            </Container>





          </Nav>

        </Navbar.Collapse>
      </Navbar>

      {/* ======================== */}

      <Navbar className="nav-desktop" bg="light" expand="md">
        <Container>
          <Navbar.Brand className="brand debug" href="/">Lemon & Lavender</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="AboutUs">About Us</Nav.Link>
            <Nav.Link href="Services">Services</Nav.Link>
            <Nav.Link href="FAQ">FAQ</Nav.Link>
          </Nav>
          <Nav.Link target="_blank" href="https://clienthub.getjobber.com/client_hubs/1b9e11c8-454b-4e4d-9eb9-268c0803eaa6/public/work_request/new">
            <Button variant="outline-dark" className="navButton">Request a Quote</Button>
          </Nav.Link>
        </Container>

      </Navbar>
    </section>

  )
}

export default NavBar;
