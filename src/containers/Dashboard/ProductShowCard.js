import React, { Component } from 'react';
import NotFound from '../../assets/images/not-found.png';

export default class ProductShowCard extends Component {
  render() {
    const { name , assets, onClick} = this.props
    const { url } = assets;
    return (
      <div className="product-card" onClick={onClick}>
        <div>
          <img src={url || NotFound} alt="Not found" />
        </div>
        <p>{name}</p>
      </div>
    )
  }
}
