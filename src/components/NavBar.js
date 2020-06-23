import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/ll-logo.jpg";

import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import "./sass/NavBar.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNav: false,
    };
  }

  toggleNav = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      toggleNav: !prevState.toggleNav,
    }));
  };

  render() {
    return (
      <section>
        <Navbar className="nav-mobile" bg="light" expand="md" fixed="top">
          <Navbar.Toggle
            className="toggle"
            aria-controls=""
            onClick={(e) => this.toggleNav(e)}
          >
            {this.state.toggleNav === false ? <MenuIcon /> : <CloseIcon />}
          </Navbar.Toggle>

          <Navbar.Brand className="brand mx-auto" href="/">
            <img className="logo" src={Logo}></img>
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mobileNav">
              <Container>
                <Row>
                  <Col className="">
                    <Nav.Link href="/">Home</Nav.Link>
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
                    <Nav.Link
                      target="_blank"
                      href="https://clienthub.getjobber.com/client_hubs/1b9e11c8-454b-4e4d-9eb9-268c0803eaa6/public/work_request/new"
                    >
                      {" "}
                      Request a Quote{" "}
                    </Nav.Link>
                  </Col>
                </Row>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* ======================== */}

        <Navbar className="nav-desktop" bg="light" expand="md">
          <Container>
            <Navbar.Brand className="brand debug" href="/">
              <img className="logo" src={Logo}></img>
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="AboutUs">About Us</Nav.Link>
              <Nav.Link href="Services">Services</Nav.Link>
              <Nav.Link href="FAQ">FAQ</Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://clienthub.getjobber.com/client_hubs/1b9e11c8-454b-4e4d-9eb9-268c0803eaa6/public/work_request/new"
              >
                <Button variant="outline-dark" className="navButton">
                  Request a Quote
                </Button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </section>
    );
  }
}

export default NavBar;
