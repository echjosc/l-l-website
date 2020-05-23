import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../assets/main/kitchen.png";
import NavBar from "../components/NavBar";
import topDecoration from "../assets/bgDecoration.png";
import axios from "axios";
import spray from "../assets/spray.png";
import gloves from "../assets/gloves.png";
import checklist from "../assets/checklist.png";

import Footer from "../components/Footer";

import "./sass/Main.scss";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FNAME: "",
      LNAME: "",
      EMAIL: "",
    };
    this.handleForm = this.handleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    alert("Submitted");

    axios
      .post(
        "df2f0d682dd18c2dca65a6ec9bf1a5f3-us17.api.mailchimp.com/3.0/lists/6bd47649e4/members/",
        {
          email_address: this.state.EMAIL,
          status: "subscribed",
          merge_fields: {
            FNAME: this.state.FNAME,
            LNAME: this.state.LNAME,
          },
        }
      )
      .then(function (response) {
        alert(response);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="mainHeaderContainer">
          <img src={Header} className="mainHeaderImg" alt="" />
          <div className="mainHeaderContent">
            <h1>Luxury Eco Friendly Housekeeping</h1>
          </div>
        </div>

        <div id="whatWeDo">
          <Container>
            <div className="px-3 text-center py-5">
              <h4>Looking for a housecleaning service that has it ALL?</h4>
              <p>
                Lemon & Lavender is a bonded + insured, luxury housecleaning
                service that specializes in{" "}
                <strong>Customer Satisfaction</strong>.{" "}
                <em>
                  Language barriers, last minute cancellations and ever-changing
                  staff
                </em>
                …Sound familiar to you? Let us show you how to have a{" "}
                <strong>sparkling</strong> home without any of the stress!
              </p>
            </div>
          </Container>
        </div>

        <div id="howItWorks">
          <Container>
            <img className="w-100" src={topDecoration} alt="" />
            <div className="mb-5 mt-3">
              <h3>How it works.</h3>
              <Row className="debug">
                <Col
                  className="text-center debug"
                  xs={12}
                  s={12}
                  md={4}
                  lg={4}
                  xl={4}
                >
                  <div className="image">
                    <img src={checklist} className="mainBodyIcons" alt=""></img>
                  </div>
                  <h5>PERSONALIZED CLEANING</h5>
                  <p>
                    Receive top notch customer service, including a free in
                    person consultation + customizable cleaning plans, based on
                    what you need
                  </p>
                </Col>
                <Col
                  className="text-center debug"
                  xs={12}
                  s={12}
                  md={4}
                  lg={4}
                  xl={4}
                >
                  <div className="image">
                    <img src={spray} className="mainBodyIcons" alt=""></img>
                  </div>
                  <h5>ECO FRIENDLY PRODUCTS</h5>
                  <p>
                    100% non-toxic cleaning solutions, free of chemicals Pure
                    essential oils are combined with natural ingredients
                    delivering a safe + effective formula
                  </p>
                </Col>
                <Col
                  className="text-center debug"
                  xs={12}
                  s={12}
                  md={4}
                  lg={4}
                  xl={4}
                >
                  <div className="image">
                    <img src={gloves} className="mainBodyIcons" alt=""></img>
                  </div>
                  <h5>PROFESSIONALLY TRAINED CLEANERS</h5>
                  <p>
                    Skilled teams of certified cleaners deliver luxury quality
                    each and every time.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <div className="mainNewsletter px-3 py-5">
          <Container className="mainNewsContainer">
            <div className="pb-2">
              <h3 className="text-left">
                Stay up to date with us. <br /> Subscribe to our Newsletter.
              </h3>
              {/* <Form onSubmit={this.handleSubmit}> */}
              <Form
                action="https://lemon-lavender.us17.list-manage.com/subscribe/post?u=af498703108094d6c8d0914e9&amp;id=6bd47649e4"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_3parent"
                noValidate
              >
                <Form.Row className="p-2">
                  <Form.Control
                    placeholder="First Name"
                    className="mainNewsInput"
                    type="text"
                    value={this.state.FNAME}
                    onChange={this.handleForm}
                    name="FNAME"
                    id="mce-FNAME"
                  />
                  {/* <Form.Label className="label">First Name</Form.Label> */}

                  <Form.Control
                    placeholder="Last Name"
                    className="mainNewsInput"
                    type="text"
                    value={this.state.LNAME}
                    onChange={this.handleForm}
                    name="LNAME"
                    id="mce-LNAME"
                  />
                  {/* <Form.Label className="label">Last Name</Form.Label> */}

                  <Form.Control
                    placeholder="E-mail Address"
                    className="mainNewsInput email"
                    type="email"
                    value={this.state.EMAIL}
                    onChange={this.handleForm}
                    name="EMAIL"
                    id="mce-EMAIL"
                  />
                  {/* <Form.Label className="label">E-mail Address</Form.Label> */}

                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>

                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_af498703108094d6c8d0914e9_6bd47649e4"
                      tabIndex="-1"
                      defaultValue=""
                    />
                  </div>

                  <Button
                    className="w-100 mainSubscribeButton button"
                    type="submit"
                  >
                    Subscribe
                  </Button>
                </Form.Row>
              </Form>
            </div>
          </Container>
        </div>

        <Footer />
      </div>
    );
  }
}
