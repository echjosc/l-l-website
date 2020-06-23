import React, { Component } from 'react'
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer"
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Team1 from "../assets/aboutUs/team1.png"
import Team2 from "../assets/aboutUs/team2.png"
import Team3 from "../assets/aboutUs/team3.png"
import Team4 from "../assets/aboutUs/team4.png"
import Founder from "../assets/aboutUs/founder.png"
import Organic from "../assets/aboutUs/organic.png"
import Nontoxic from "../assets/aboutUs/nontoxic.png"
import Ecofriendly from "../assets/aboutUs/ecofriendly.png"
import Button from "react-bootstrap/Button"

import "./sass/AboutUs.scss"

class AboutUs extends Component {
    render() {
        return (
            <div page="aboutus">
                <Navbar2 />

                <div className="aboutHeader">

                    <Container>
                        <Row>
                            <Col xs={12} md={6} className="aboutHeaderContainer  ">
                                <div className="aboutHeaderContent ">
                                    <h1 className="">
                                        Get to know us.
                                </h1>
                                    <h6>We are passionate making your home SPARKLE!</h6>
                                    <Button target="_blank" href="https://clienthub.getjobber.com/client_hubs/1b9e11c8-454b-4e4d-9eb9-268c0803eaa6/public/work_request/new" variant="light" className="aboutButton" >GET STARTED TODAY!</Button>
                                </div>


                            </Col>
                            <Col xs={12} md={6}>
                                <Carousel
                                    controls={false}
                                    indicators={false}
                                    pauseOnHover={false}
                                    interval={5000}
                                    slide={false}
                                >


                                    {/* <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Team1}
                                            alt=""
                                        />

                                    </Carousel.Item> */}
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Team2}
                                            alt=""
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Team3}
                                            alt=""
                                        />


                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Team4}
                                            alt=""
                                        />

                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </div>

             

                <div className="aboutAboutUs">
                    <Container>
                        {/* <h3 className="text-center">About Us</h3> */}
                        <Row>
                            <Col className="text-left" >
                                <p>
                                    Lemon & Lavender provides the professionalism of a large company with the personal, clean touch of a small business. We use all natural, non-toxic household cleaning products. Brianna, our Founder, mixes many of our solutions at home using a variety of simple ingredients, including essential oils.
                                </p>
                                <p>
                                    We offer a multitude of services that are convenient for you and your family. In addition to housecleaning, we provide pre/post construction cleans and move-in/out cleans.
                                </p>
                            </Col>
                        </Row>


                    </Container>
                </div>

                <div className="aboutIconContainer">
                    <Container>
                        <Row>
                            <Col xs={12} sm={4} className="text-center">
                                <img src={Organic} className="aboutIcon " alt="" />
                                <h5>Organic</h5>
                            </Col>
                            <Col xs={12} sm={4} className="text-center">
                                <img src={Nontoxic} className="aboutIcon " alt="" />
                                <h5>Non-Toxic</h5>
                            </Col>
                            <Col xs={12} sm={4} className="text-center">
                                <img src={Ecofriendly} className="aboutIcon " alt="" />
                                <h5>Eco-Friendly</h5>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="aboutFromOurFounder">
                    <Container>
                        <h2 className="text-center"> From Our Founder</h2>
                        <Row>
                            <Col xs={12} s={12} md={4} lg={4} xl={4} className="text-center" >
                            </Col>
                            <Col xs={12} s={12} md={12} lg={12} xl={12} className="text-left">
                                <div className="mx-5 text-center" style={{float: "left"}} >
                                    <img src={Founder} className="founderIcon" alt=""/>
                                    <h5>Brianna Espinoza</h5>
                                </div>
                                <p>
                                    In 2015, I became a first time mother. During my journey through motherhood, health and wellness became a major interest. From her son’s, Luca, natural diapers to his organic shampoo, to the food she was preparing on their kitchen table, she made a consistent effort to keep everything as safe as possible for her little one.
                                </p>
                                <p>
                                    As I continued down this road of health, the cleaning products I used in my home also became a concern. As a creative person, I started making my own household cleaning liquids with ingredients I knew. The products I created not only smelled great but also got the job done!
                                </p>
                                <p>
                                    Lemon & Lavender was born after realizing that not all cleaning products are created equal. Most commercial cleaning agents which advertise as “green” or “natural” are in fact not as eco friendly as the label claims.
                                </p>
                                <p>
                                    Coming from a background in the service industry, I quickly realized that there was a need for an eco-friendly housekeeping service; one that specializes in homemade cleaning products, which are truly organic and safe. Lemon & Lavender was born to enable the modern day household to function with less stress.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <Footer />
            </div>
        )
    }
}
export default AboutUs;
