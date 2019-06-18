import React, { Component } from 'react'
import NavBar from "../components/NavBar"
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Team1 from "../assets/teamBg-1.gif"
import Team2 from "../assets/teamBg-2.gif"
import Team3 from "../assets/teamBg-3.gif"
import Team4 from "../assets/teamBg-4.gif"

import "./css/Team.css"
import CarouselItem from 'react-bootstrap/CarouselItem';

class Team extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <div className="content debug">



                    <Carousel
                        controls={false}
                        indicators={false}
                        pauseOnHover={false}
                        interval={4000}
                        fade={true}
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
                    <h3 className="carousel-content">Meet the Team</h3>




                </div>

            </div>
        )
    }
}
export default Team;
