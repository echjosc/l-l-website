import React, { Component } from 'react'
import Logo from "../assets/ll-logo.jpg"
// import ATTN from "./Announcement"

import "./sass/Navbar2.scss";

export default class Navbar2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             "isOpen": false
        }
    }

    componentDidUpdate(){
        this.state.isOpen ? document.body.style.overflow = "hidden" :  document.body.style.overflow = "visible"
    }
    
    handleIsOpen = (e) =>{
        e.preventDefault();
        this.setState({
            "isOpen": !(this.state.isOpen)
        });
       
    }
    
    test = () => {
        window.addEventListener('resize')
    }




    render() {
        return (
            <div id="navbar2">
                 <div id="announcement">
                <div class="attn" style={this.state.isOpen ? {position: 'fixed'} : { position: 'relative'}}>
                    SERVING WESTCHESTER AND FAIRFIELD COUNTIES
                </div>
            </div>
                <div id="navbar2-container">
                    <div className="logo-container">
                        <a href="/"><img className="logo" src={Logo} /></a>
                    </div>
                    <div className="nav-items">
                        <ul>
                            <a href="/">
                                <li>
                                    Home
                                </li>
                            </a>
                            <a href="/aboutus">
                                <li>
                                    About Us
                                </li>
                            </a>
                            <a href="/services">
                                <li>
                                    Services
                                </li>
                            </a>
                            <a href="/faq">
                                <li>
                                    FAQ
                                </li>
                            </a>
                         
                            <a target="_blank" rel="noopener noreferrer" href="https://clienthub.getjobber.com/client_hubs/1b9e11c8-454b-4e4d-9eb9-268c0803eaa6/public/work_request/new">
                                <li>
                                    Request a Quote
                                </li>
                            </a>
                       
                        </ul>
                    </div>
                </div>
                <div id="navbar2-mobile" >
                    <div id="mobile-container" style={this.state.isOpen ? {position: 'fixed'} : { position: 'relative'}}>
                        <div className="logo-container">
                            <a href="/"><img className="logo" src={Logo} /></a>
                        </div>
                        <div className="icon">
                            <i onClick={this.handleIsOpen} class={this.state.isOpen ? "fas fa-times" :"fas fa-bars"}></i>
                        </div>
                        <div  className="nav-items">
                        <ul style={this.state.isOpen ? {left: '0px', opacity: '100%'}:{ left: '-100vw', opacity: '50%'}}>
                            <a href="/">
                                <li>
                                    Home
                                </li>
                            </a>
                            <a href="/aboutus">
                                <li>
                                    About Us
                                </li>
                            </a>
                            <a href="/services">
                                <li>
                                    Services
                                </li>
                            </a>
                            <a href="/faq">
                                <li>
                                    FAQ
                                </li>
                            </a>
                         
                            <a target="_blank" rel="noopener noreferrer" href="https://clienthub.getjobber.com/client_hubs/1b9e11c8-454b-4e4d-9eb9-268c0803eaa6/public/work_request/new">
                                <li>
                                    Request a Quote
                                </li>
                            </a>
                       
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
