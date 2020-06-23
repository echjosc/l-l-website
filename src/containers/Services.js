import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import OneDone from "../assets/onedone.png";
import Weekly from "../assets/weekly.png";
import Essential from "../assets/essential.png";

import "./sass/Services.scss";

export default class Services extends Component {
  render() {
    return (
      <div page="services">
        <Navbar2 />

        <div className="servicesContent">
          <Container>
            <Row>
              <Col xs={12} s={12} md={12} lg={12} xl={12}>
                <h4 className="text-center text-md-left">
                  Serving Westchester & Fairfield Counties
                </h4>
                <p className="text-md-left text-center">
                  We strive to provide our clients with extraordinary service
                  throughout every facet of our relationship. Each new client
                  receives an Initial Deep Eco-Clean at which point our cleaners
                  will familiarize themselves with your home. Clients who book
                  weekly or bi-weekly service qualify for discounted maintenance
                  rates. If you would like to set up your Initial Deep Eco-Clean or have any addition questions or concerns, email us at <a href="mailto:info@lemon-lavender.com">info@lemon-lavender.com</a> or call us at <a href="tel:(914)574-4478">(914) 574-4478</a>.
                </p>
              </Col>
            </Row>

            <Row>
              <Col
                className="text-md-right text-center  "
                xs={12}
                s={12}
                md={4}
                lg={4}
                xl={4}
              >
                <img className="servicesIcon" alt="" src={Essential} />
              </Col>
              <Col
                className="text-md-left text-center align-self-center "
                xs={12}
                s={12}
                md={8}
                lg={8}
                xl={8}
              >
                <h5>Initial Deep Clean</h5>
                <p>
                  Our Initial Deep Cleans allows our cleaners to familiarize
                  themselves with your home and for you to familiarize yourself
                  with our business. We charge an hourly rate and depending on
                  the size of your home, we will send a team of 2-4 cleaners to
                  get the job done.
                </p>
              </Col>
            </Row>
            <Row>
              <Col
                className="text-md-right text-center  "
                xs={{ span: 12, order: 1 }}
                s={{ span: 12, order: 1 }}
                md={{ span: 4, order: 1 }}
                lg={4}
                xl={4}
              >
                <img className="servicesIcon " alt="" src={Weekly} />
              </Col>
              <Col
                className="text-md-left text-center align-self-center  "
                xs={{ span: 12, order: 2 }}
                s={{ span: 12, order: 2 }}
                md={{ span: 8, order: 1 }}
                lg={8}
                xl={8}
              >
                <h5>Weekly/Bi-Weekly</h5>
                <p>
                  After your Initial Deep Clean, you have decided you would like
                  a recurring contract with L&L, we will give you a personalized
                  quote for cleaning on a regular basis.
                </p>
              </Col>
            </Row>
            <Row>
              <Col
                className="text-md-right text-center align-middle  "
                xs={12}
                s={12}
                md={4}
                lg={4}
                xl={4}
              >
                <img className="servicesIcon " alt="" src={OneDone} />
              </Col>
              <Col
                className="text-md-left text-center align-self-center "
                xs={12}
                s={12}
                md={8}
                lg={8}
                xl={8}
              >
                <h5>One & Done</h5>
                <p>
                  Moving? Renovating? Just looking for an in-depth deep clean
                  without the commitment? Our One & Done service is perfect for
                  you. Contact us and we will work with you to make sure your
                  needs are met.
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
