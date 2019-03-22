import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../assets/ll-logo.jpg'
import "./NavBar.css";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar id="NavBar">
                    <img src={Logo} id="Logo" />
            </Toolbar>
        </AppBar>

    )
}

export default NavBar;
