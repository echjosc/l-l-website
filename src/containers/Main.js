import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import header from '../assets/mainHeader.jpg';
import NavBar from '../components/NavBar'
import tempIcon from '../assets/onedone.png'
import topDecoration from '../assets/bgDecoration.png'

import './sass/Main.scss';

export default class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='mainHeaderContainer'>
          <img src={header} className="mainHeaderImg" />
          <div className='mainHeaderContent'>
            <h3>Welcome to the new way to clean.</h3>
            <Button size='lg' className='mainHeaderButton'>GET A QUOTE</Button>
          </div>
        </div>

        <div id='whatWeDo'>
          <Container>
            <div className='p-5'>
              <h3>We love what we do.</h3>
              <p>
                Ad incididunt exercitation Lorem minim id aliquip occaecat ad ipsum non aliquip laboris.
                Minim commodo fugiat pariatur magna proident mollit laboris exercitation nisi eiusmod veniam.
                Nostrud occaecat adipisicing Lorem mollit quis eu reprehenderit officia nulla minim officia voluptate ad.
                Dolor proident officia sint nulla ea elit in cupidatat anim.
            </p>
            </div>
          </Container>
        </div>


        <div id='howItWorks'>

          <Container>
            <img className='w-100' src={topDecoration} />
            <div className='mb-5 mt-3'>
              <h3>How it works.</h3>
              <Row className='debug'>
                <Col className='text-center debug' xs={12} s={12} md={4} lg={4} xl={4} >
                  <img src={tempIcon} className='mainBodyIcons '></img>
                  <h5>Ad velit laborum.</h5>
                  <p>
                    Nostrud aute amet eiusmod laborum esse proident laborum.
                    Proident amet reprehenderit et do fugiat.
                    Officia in in dolor commodo consectetur ex cillum incididunt deserunt.
                  </p>
                </Col>
                <Col className='text-center debug' xs={12} s={12} md={4} lg={4} xl={4}>
                  <img src={tempIcon} className='mainBodyIcons'></img>
                  <h5>
                    Labore ut sint.
                  </h5>
                  <p>
                    Proident veniam pariatur anim sunt commodo amet anim voluptate labore tempor pariatur culpa.
                    Cillum in duis do ullamco.
                    Ad exercitation id consequat incididunt anim incididunt incididunt duis occaecat et cupidatat.
                  </p>
                </Col>
                <Col className='text-center debug' xs={12} s={12} md={4} lg={4} xl={4}>
                  <img src={tempIcon} className='mainBodyIcons'></img>
                  <h5>
                    Do proident.
                  </h5>
                  <p>
                    Tempor labore voluptate fugiat dolore proident sunt dolor aute aliqua enim officia esse.
                    Minim commodo incididunt sunt dolor excepteur adipisicing laboris.
                    Et velit do aliquip minim ullamco sunt velit sint quis consequat sit.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>



        <div className='mainNewsletter p-5'>
          <Container className="mainNewsContainer">
            <div className='pb-2'>
              <h3 className='text-left'>Stay up to date with us. <br /> Subscribe to our Newsletter.</h3>
              <Form className=''>
                <Form.Row className='p-2'>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control className='mainNewsInput' />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control className='mainNewsInput' />
                  </Col>
                </Form.Row>
                <Form.Row className='p-2'>
                  <Col>
                    <Form.Label>E-mail Address</Form.Label>
                    <Form.Control className='mainNewsInput' />
                  </Col>
                  <Col>

                    <Button className="w-100 mainSubscribeButton" variant="primary" type="submit">
                      Subscribe
                    </Button>
                  </Col>
                </Form.Row>

              </Form>
            </div>
          </Container>

        </div>



        {/* Footer will be here */}




      </div>
    )
  }
}
