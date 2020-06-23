import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar2 from "../components/Navbar2";
import Footer from '../components/Footer'
import Question from "../assets/faq/question.png"
import Answer from "../assets/faq/answer.png"

import './sass/FAQ.scss'

export default class FAQ extends Component {
    render() {
        return (
            <div page="faq">
                <Navbar2 />
                <Container className="faqContent">
                    <div className="faqHeader text-center text-md-left">
                        <h2 >Frequently Asked Questions</h2>
                        <h6>Don't see your question? E-mail us <a href="mailto:info@lemon-lavender.com"><u>here</u> </a></h6>
                    </div>




                    <div className="questionAnswer">
                        <Row className="question ">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon " alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    How much do you charge?
                                </p>
                            </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    All cleaning plans start off with an Initial Deep Clean, which is charged on an hourly rate.
                                            All ongoing cleaning contracts are personalized on a house-by-house basis.
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <hr />


                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    How many cleaners will service my home?
                                </p>
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    2-4 trained cleaners will clean your home on any given basis.
                                </p>
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Do you charge based on # of cleaners who clean my home?
                                </p>
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    No. Prices do not reflect number of cleaners on a given job.
                                </p>
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    What are your cleaning products made of?
                                </p>
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Our products are mixes of the following ingredients:
                                </p>
                            <ul className="ml-4">
                                    <li>
                                        Organic Castille Soap
                                </li>
                                    <li>
                                        White Vinegar
                                </li>
                                    <li>
                                        Alcohol
                                </li>
                                    <li>
                                        Baking Soda
                                </li>
                                    <li>
                                        Essential oils (orange, lemon, lavender, tea tree)
                                </li>
                                    <li>
                                        Dr. Bronner's Sal Suds
                                </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Can I request the use of chemical cleaners in my home?
                                </p>
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" alt=""/>
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Yes. We can accommodate any cleaning regiment you would like.
                                </p>
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Do I need to be home during my scheduled clean?
                                </p>
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    No! We encourage all clients to leave a key or garage code so cleaners can enter without any inconvenience.
                                </p>
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    How can I pay for my cleaning service?
                                </p>
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    We accept payment via checks, Venmo or Zelle.
                                </p>
                        </Col>
                        </Row>
                    </div>

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    How can I save money when signing up for a cleaning contract?
                                </p>
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    If you buy 5 cleanings up front, your 6th cleaning will be 1⁄2 price.
                                </p>
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Is Lemon & Lavender insured?
                                </p>
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Yes.
                                </p>
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Do I provide cleaning supplies + equipment?
                                </p>
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    We do provide all necessary supplies, products and equipment.
                                        However, if you prefer your own supplies, we will use yours.
                                </p>
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Can I cancel or skip a cleaning appointment?
                                </p>
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    If you wish to cancel or reschedule an appointment, please allow 24 business hours' notice to avoid being charged.
                                </p>
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Do you clean on the holidays?
                                </p>
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" alt="" />
                            </Col>
                            <Col xs={10}>
                                <p>
                                    We clean on all holidays EXCEPT for Thanksgiving Day, Christmas Day + New Years Day.
                                </p>
                        </Col>
                        </Row>
                    </div>
                </Container>

                <Footer />
            </div>
        )
    }
}
