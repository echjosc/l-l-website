import React, { Component } from 'react'
import NavBar from "../components/NavBar"
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
            <div>
                <NavBar />

                <div className="aboutHeader">

                    <Container >
                        <Row>
                            <Col xs={12} md={6} className="aboutHeaderContainer  ">
                                <div className="aboutHeaderContent ">
                                    <h1 className="">
                                        Get to know us.
                                </h1>
                                    <h5>We are passionate about what we do and how we do it.</h5>
                                    <Button variant="light" className="aboutButton" >GET STARTED TODAY!</Button>
                                </div>


                            </Col>
                            <Col xs={12} md={6}>
                                <Carousel
                                    controls={false}
                                    indicators={false}
                                    pauseOnHover={false}
                                    interval={4000}
                                    slide={false}
                                >


                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Team1}
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Team2}
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Team3}
                                        />


                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Team4}
                                        />

                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="aboutIconContainer">
                    <Container>
                        <Row>
                            <Col xs={12} sm={4} className="text-center">
                                <img src={Organic} className="aboutIcon " />
                            </Col>
                            <Col xs={12} sm={4} className="text-center">
                                <img src={Nontoxic} className="aboutIcon " />
                            </Col>
                            <Col xs={12} sm={4} className="text-center">
                                <img src={Ecofriendly} className="aboutIcon " />
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="aboutAboutUs">
                    <Container>
                        <h3>About Us</h3>
                        <Row>
                            <Col >

                                Lemon & Lavender provides the professionalism of a large company with the personal, clean touch of a small business. We use all natural, non-toxic household cleaning products. Brianna, our Founder, mixes many of our solutions at home using a variety of simple ingredients, including essential oils.
                                We offer a multitude of services that are convenient for you and your family. In addition to housecleaning, we provide pre/post construction cleans and move-in/out cleans.
                            </Col>
                        </Row>


                    </Container>
                </div>

                <div className="aboutFromOurFounder">
                    <Container>
                        <h3>From Our Founder</h3>
                        <Row>
                            <Col xs={12} s={12} md={4} lg={4} xl={4} className="text-center">
                                <img src={Founder} className="founderIcon" />
                                <h4>Brianna Espinoza</h4>
                            </Col>
                            <Col xs={12} s={12} md={8} lg={8} xl={8}>
                                In 2015, I became a first time mother. During my journey through motherhood, health and wellness became a major interest. From her son’s, Luca, natural diapers to his organic shampoo, to the food she was preparing on their kitchen table, she made a consistent effort to keep everything as safe as possible for her little one.

                                As I continued down this road of health, the cleaning products I used in my home also became a concern. As a creative person, I started making my own household cleaning liquids with ingredients I knew. The products I created not only smelled great but also got the job done!

                                Lemon & Lavender was born after realizing that not all cleaning products are created equal. Most commercial cleaning agents which advertise as “green” or “natural” are in fact not as eco friendly as the label claims.

                                Coming from a background in the service industry, I quickly realized that there was a need for an eco-friendly housekeeping service; one that specializes in homemade cleaning products, which are truly organic and safe. Lemon & Lavender was born to enable the modern day household to function with less stress.
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
