import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import HeaderImg from "../assets/_DSC5641.jpg";
import Logo from '../assets/ll-logo.jpg'
import Initial from '../assets/essential.png'
import OneDone from '../assets/onedone.png'
import Weekly from '../assets/weekly.png'
import EcoFriendly from '../assets/ecofriendly.png'
import NonToxic from '../assets/nontoxic.png'
import Organic from '../assets/organic.png'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer'
import "./Home.css"



class Home extends Component {

    render() {
        return (
            <div>
                <Navbar bg="light" expand="sm">
                    <Navbar.Brand href="#">Lemon & Lavender</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="About">About Us</Nav.Link>
                            <Nav.Link href="Services">Services</Nav.Link>
                            <Nav.Link href="Team">Team</Nav.Link>
                            <Nav.Link href="FAQ">FAQ</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>



                <div className="content debug">

                    <div className="left-1">
                        <div id="headerSection">
                            <h2 align="left">Welcome, <br /> to the new clean</h2>
                            <br />
                            <p align="left">Organic non-toxic cleaning serving <br /> Westchester and Fairfield Counties </p>
                            <Nav.Link align="right" target="_blank" href="https://clienthub.getjobber.com/client_hubs/1b9e11c8-454b-4e4d-9eb9-268c0803eaa6/public/work_request/new">
                                <Button variant="primary">Request a Quote</Button>
                            </Nav.Link>
                        </div>

                    </div>
                    <div className="right-1" >
                        <img className="headerImg" src={HeaderImg} />
                    </div>
                </div>
                


                <div className="bg-wg">
                    <Container className="element1">
                        
                    <Row className="justify-content-center" >
                            <Col className="debug" xs={10} s={18} md={12} lg={12}>
                                <h4 align="left">
                                    Our Story
                                </h4>
                            </Col>
                        </Row>
                        <Row className="justify-content-center" >
                            <Col className="debug" xs={10} s={18} md={12} lg={12}>
                            <p align="left">
                                Exercitation incididunt non labore id anim eu veniam esse sit labore sunt.
                                Reprehenderit sit irure fugiat mollit aliqua sint est ut minim labore nulla in.
                                Officia in et consectetur anim tempor incididunt aliquip sint eu ea do enim eiusmod sint.
                                Cillum dolore elit Lorem consequat culpa deserunt duis ex eiusmod occaecat.
                                Ullamco tempor laboris consectetur ullamco duis nostrud magna aute velit.
                                Et anim dolor Lorem voluptate laboris culpa ut do voluptate consectetur reprehenderit irure sunt pariatur. 
                                Id occaecat esse quis mollit fugiat commodo sit minim excepteur enim ut velit laborum.
                                Enim commodo sunt exercitation mollit aliquip pariatur consectetur cupidatat laboris do ex nisi esse consectetur.
                                In eiusmod veniam in labore anim adipisicing irure officia adipisicing do.
                                Ut est excepteur ut fugiat ullamco Lorem irure eu id Lorem minim in cillum.
                                Ad aute culpa exercitation eiusmod exercitation duis duis exercitation ipsum do qui.
                                Do voluptate reprehenderit consequat do qui officia dolore.
                                Cillum voluptate id non proident eu enim ex nulla ex velit.
                               
                            </p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="bg-gw">
                    <Container className="element1">
                        
                    <Row className="justify-content-center" >
                            <Col className="debug" xs={10} s={18} md={12} lg={12}>
                                <h4 align="left">
                                    Our Products
                                </h4>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col className="debug " xs={10} s={6} md={4} lg={4}>
                                <img className="icon1 debug" src={EcoFriendly} />

                            </Col>
                            <Col className="debug" xs={5} s={6} md={4} lg={4}>
                                <div>
                                    <img className="icon1" src={Organic} /> <br />

                                </div>

                            </Col>
                            <Col className="debug" xs={5} s={6} md={4} lg={4}>
                                <img className="icon1" src={NonToxic} />

                            </Col>

                        </Row>
                        <Row className="justify-content-center" >
                            <Col className="debug" xs={10} s={18} md={12} lg={12}>
                            <p align="left">
                                Exercitation incididunt non labore id anim eu veniam esse sit labore sunt.
                                Reprehenderit sit irure fugiat mollit aliqua sint est ut minim labore nulla in.
                                Officia in et consectetur anim tempor incididunt aliquip sint eu ea do enim eiusmod sint.
                                Cillum dolore elit Lorem consequat culpa deserunt duis ex eiusmod occaecat.
                                Ullamco tempor laboris consectetur ullamco duis nostrud magna aute velit.
                                Et anim dolor Lorem voluptate laboris culpa ut do voluptate consectetur reprehenderit irure sunt pariatur. 
                            </p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="bg-wg">
                    <Container className="element2">
                    <Row className="justify-content-center" >
                            <Col className="debug" xs={10} s={18} md={12} lg={12}>
                                <h4 align="left">
                                    Our Services
                                </h4>
                            </Col>
                        </Row>
                        
                        <Row className="justify-content-center">
                            <Col className="debug" xs={10} s={18} md={4} lg={4}>
                                <img className="icon2" src={Initial} />
                                <h5>Initial Clean</h5>
                                <p>
                                    Enim culpa commodo exercitation est adipisicing laborum velit do exercitation.
                                    Aliqua qui ea ad reprehenderit ullamco incididunt do nulla.
                                    Excepteur esse culpa cillum sint aliquip.
                                </p>
                            </Col>
                            <Col className="debug" xs={10} s={18} md={4} lg={4}>
                                <div>
                                    <img className="icon2" src={Weekly} /> <br />
                                    <h5>Weekly/Bi-Weekly</h5>
                                    <p>
                                        Amet elit veniam proident anim reprehenderit aute.
                                        Ex commodo sunt id labore fugiat labore esse occaecat qui aliquip eu.
                                        Id enim est deserunt magna excepteur.
                                </p>
                                </div>

                            </Col>
                            <Col className="debug" xs={10} s={18} md={4} lg={4}>
                                <img className="icon2" src={OneDone} />
                                <h5>One & Done</h5>
                                <p>
                                    Labore magna eiusmod velit officia culpa reprehenderit ipsum voluptate duis pariatur.
                                    Sit quis veniam do quis fugiat ullamco proident amet labore deserunt qui cillum quis anim.
                                    Et qui culpa ex quis.
                            </p>
                            </Col>

                        </Row>
                    </Container>
                </div>

                <Footer />









            </div>


        );
    }

}
export default Home;