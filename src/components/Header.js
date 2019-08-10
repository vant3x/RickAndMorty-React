import React from 'react';
import logo from '../images/logo.png';

function Header () {
    return(
      <React.Fragment>
            <header>
            <img src={logo} className="App-logo1" alt="logo" />

            </header>
      </React.Fragment>
    );
}

export default Header;