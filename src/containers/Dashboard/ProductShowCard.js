import React, { Component } from 'react';
import NotFound from '../../assets/images/not-found.png';

export default class ProductShowCard extends Component {
  render() {
    const { name, onClickSelectProduct = () => { }, item = {} } = this.props
    const { asset = {} } = item;
 
    const { url } = asset;


    return (
      <div className="product-card" onClick={() => onClickSelectProduct(item.id || "")}>
        <div>
          <img src={url} alt="" onError={(e) => e.target.src = NotFound} />
        </div>
        <p>{name}</p>
      </div>
    )
  }
}
