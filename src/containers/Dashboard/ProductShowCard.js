import React, { Component } from 'react';
import NotFound from '../../assets/images/not-found.png';

export default class ProductShowCard extends Component {
  render() {
    const { name, assets, onClickSelectProduct = () => { }, item = {} } = this.props
 
    const { url } = assets;
    return (
      <div className="product-card" onClick={() => onClickSelectProduct(item.id)}>
        <div>
          <img src={url || NotFound} alt="Not found" />
        </div>
        <p>{name}</p>
      </div>
    )
  }
}
