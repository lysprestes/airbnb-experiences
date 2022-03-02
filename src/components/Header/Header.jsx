import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <img src={logo} alt="logo" className='logo'/>
      </header>
    );
  }
}

export default Header;