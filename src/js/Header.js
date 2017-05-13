import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// assets
import logo from './assets/logo.png'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

// Header.propTypes = {

// };

export default Header;
