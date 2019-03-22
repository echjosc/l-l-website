import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import HeaderImg from "../assets/_DSC5641.jpg";
import Logo from '../assets/ll-logo.jpg'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./Home.css"



class Home extends Component {

    render() {
        return (
            <div>
                <div className="content" >

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
                        <img id="headerImg" src={HeaderImg} />
                    </div>
                </div>


                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">Lemon & Lavender</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="About">About Us</Nav.Link>
                            <Nav.Link href="Services">Services</Nav.Link>
                            <Nav.Link href="FAQ">FAQ</Nav.Link>
                            <Nav.Link href="Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div className="content" >
                    <div className="left-2 debug">
                        <img id="Logo" src={Logo} />
                    </div>
                    <div className="right-2 debug" >
                        Sup
                    </div>


                </div>


            </div>


        );
    }

}
export default Home;