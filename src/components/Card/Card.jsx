import React, { Component } from 'react';
import star from '../../assets/star.png';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    let badgeText
    if (this.props.openSpots === 0) {
      badgeText = 'SOLD OUT'
    } else if (this.props.location === 'Online') {
      badgeText = 'ONLINE'
    }

    const imageSource = `../../images/${this.props.coverImg}`;

    return (
      <div className='card'>
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        
        <img src={imageSource} alt="nao renderizou" className='card--img' />
        <div className='card--stats'>
          <img src={star} alt="" className='card-star'/>
          <span>{this.props.stats.rating}</span>
          <span className='gray'> ({this.props.stats.reviewCount})</span>
          <span className='gray'>{this.props.location}</span>
        </div>
        <p>{this.props.title}</p>
        <p><span className='bold'>{`From ${this.props.price}`}</span> / person</p>
      </div>
    );
  }
}

export default Card;