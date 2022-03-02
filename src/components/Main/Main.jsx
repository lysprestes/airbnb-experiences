import React, { Component } from 'react';
import hero from '../../assets/hero.png';
import './Main.css';

class Header extends Component {
  render() {
    return (
      <div className='main-container'>
        <div>
          <img src={hero} alt="hero"  className='hero-img'/>
        </div>
        <div className='hero-text'>
          <h1>Online Experiences</h1>
          <h2>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
        </div>
      </div>
    );
  }
}

export default Header;