import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Routes from './Routes';

import "./App.scss"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }



  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };


    return (
      <div className="App">      
        <div>
          <Routes childProps={childProps} />

        </div>



      </div>
    );
  }
}

export default App;
