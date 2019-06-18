import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./css/Footer.css"


export default class Footer extends Component {
    render() {
        return (
            <div className="footer-background">
                <Container>
                    <Row><Col><br /></Col></Row> 
                    {/* Eventually, add top paadding yo this row */}



                    <Row className="justify-content-center">
                        <Col className="debug" xs={6} sm={4} md={4} lg={4} xl={4} >
                            <h5>ABOUT</h5>
                            <Nav.Link  href="About">Test</Nav.Link>
                            <Nav.Link href="About">Test</Nav.Link> <br />
                            <h5 >SERVICES</h5>
                            <Nav.Link  href="About">Test</Nav.Link>
                            <Nav.Link  href="About">Test</Nav.Link>



                        </Col>
                        <Col className="debug" xs={6} sm={4} md={4} lg={4} xl={4}>
                            <h5>LOCATION</h5>
                            <Nav.Link href="About">Test</Nav.Link>
                            <Nav.Link href="About">Test</Nav.Link>
                            <Nav.Link href="About">Test</Nav.Link>



                        </Col>
                        <Col className="debug" xs={12} sm={4} md={4} lg={4} xl={4}>
                            <h5>LOCATION</h5>
                            <Nav.Link href="About">Test</Nav.Link>
                            <Nav.Link href="About">Test</Nav.Link>
                            <Nav.Link href="About">Test</Nav.Link>

                        </Col>

                    </Row>


                </Container>
            </div >
        )
    }
}
