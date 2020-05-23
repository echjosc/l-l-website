import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import IG from '../assets/footer/instagram.svg'
import FB from '../assets/footer/facebook.svg'
import "./sass/Footer.scss"


export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container>




                    <Row className="justify-content-center">
                        <Col className="" xs={5} sm={6} md={4} lg={4} xl={4} >
                            <a href="/">Home</a> <br />
                            <a href="/Services">Services</a> <br />
                            <a href="/AboutUs">About Us</a> <br />
                            <a href="/FAQ">FAQ</a> <br />
                            <a href="https://clienthub.getjobber.com/client_hubs/1b9e11c8-454b-4e4d-9eb9-268c0803eaa6/public/work_request/new" target="_blank">Request a Quote</a> <br /><br />

                            <div className="d-md-none">
                                <h6>Follow Us!</h6>
                                <a href="https:/www.instagram.com/" target="_blank" rel="noopener noreferrer" ><img className="footerIcon" alt="" src={IG} width="43px" /></a>
                            <a href="https:/www.facebook.com/" target="_blank" rel="noopener noreferrer" ><img className="footerIcon" alt="" src={FB} width="35px" /></a>
                            </div>





                        </Col>
                        <Col className="" xs={6} sm={6} md={4} lg={4} xl={4}>
                            <h6>Contact & Hours</h6>

                            <a href="mailto:info@lemon-lavender.com">info@lemon-lavender.com</a><br />
                            <a href="tel:(914)574-4478">(914) 574-4478</a><br />
                            <br />

                            <p className="text-left">
                                Mon: 8am - 5pm<br />
                                Tues: 8am - 5pm<br />
                                Wed: 8am - 5pm<br />
                                Thurs: 8am - 5pm<br />
                                Fri: 8am - 5pm
                            </p>
                        </Col>

                        <Col className="d-none d-md-block " xs={0} sm={0} md={4} lg={4} xl={4}>
                            <h6 >Follow Us!</h6>


                            <a href="https://www.instagram.com/lemon.lavender.clean/" target="_blank" rel="noopener noreferrer" ><img className="footerIcon" src={IG} alt="" width="43px" /></a>
                            <a href="https://www.facebook.com/lemonandlavenderclean/" target="_blank" rel="noopener noreferrer" ><img className="footerIcon" src={FB} alt="" width="35px" /></a>
                        </Col>


                    </Row>


                </Container>
            </div >
        )
    }
}
