import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Question from "../assets/faq/question.png"
import Answer from "../assets/faq/answer.png"

import './sass/FAQ.scss'

export default class FAQ extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container>
                    <div className="faqHeader text-center text-md-left">
                        <h2 >Frequently Asked Questions</h2>
                        <h6>Don't see your question? E-mail us <a href="mailto:info@lemon-lavender.com"><u>here</u> </a></h6>
                    </div>




                    <div className="questionAnswer">
                        <Row className="question ">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon " />
                            </Col>
                            <Col xs={10} className="">
                                How much do you charge?
                            </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                All cleaning plans start off with an Initial Deep Clean, which is charged on an hourly rate.
                                        All ongoing cleaning contracts are personalized on a house-by-house basis.
                            </Col>
                        </Row>
                    </div>

                    <hr />


                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                How many cleaners will service my home?
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                2-4 trained cleaners will clean your home on any given basis.
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                Do you charge based on # of cleaners who clean my home?
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                No. Prices do not reflect number of cleaners on a given job.
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                What are your cleaning products made of?
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                Our products are mixes of the following ingredients:
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
                                <img src={Question} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                Can I request the use of chemical cleaners in my home?
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                Yes. We can accommodate any cleaning regiment you would like.
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                Do I need to be home during my scheduled clean?
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                No! We encourage all clients to leave a key or garage code so cleaners can enter without any inconvenience.
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                How can I pay for my cleaning service?
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                We accept payment via checks, Venmo or Zelle.
                        </Col>
                        </Row>
                    </div>

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                How can I save money when signing up for a cleaning contract?
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                If you buy 5 cleanings up front, your 6th cleaning will be 1⁄2 price.
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                Is Lemon & Lavender insured?
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                Yes.
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                Do I provide cleaning supplies + equipment?
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                We do provide all necessary supplies, products and equipment.
                                    However, if you prefer your own supplies, we will use yours.
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                Can I cancel or skip a cleaning appointment?
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                If you wish to cancel or reschedule an appointment, please allow 24 business hours' notice to avoid being charged.
                        </Col>
                        </Row>
                    </div>

                    <hr />

                    <div className="questionAnswer">
                        <Row className="question">
                            <Col xs={2}>
                                <img src={Question} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                Do you clean on the holidays?
                        </Col>
                        </Row>

                        <Row className="answer">
                            <Col xs={2}>
                                <img src={Answer} className="faqIcon" />
                            </Col>
                            <Col xs={10}>
                                We clean on all holidays EXCEPT for Thanksgiving Day, Christmas Day + New Years Day.
                        </Col>
                        </Row>
                    </div>
                </Container>

                <Footer />
            </div>
        )
    }
}
