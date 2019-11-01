import React, { Component } from 'react'
import { Col } from "react-bootstrap";
import InputRangedouble from './InputRange';
import AccordionComp from "./AccordionComp"
export class LeftMenuBar extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Col xs={12} sm={12} md={12} className="borderBottom" >
          <h4> Filters</h4>
        </Col>
        <Col xs={12} sm={12} md={12} className="borderBottom">
          <h6 className="categories"> CATEGORIES</h6>
          <h6 style={{ color: "#0000004f" }}>Mobiles & Accessories</h6>
          <h6 className="mobiles">Mobiles</h6>
        </Col>
        <Col xs={12} sm={12} md={12} className="borderBottom" >
          <span className="price"> PRICE</span>
          <span className="clear"> CLEAR</span>
        </Col>
        <Col xs={12} sm={12} md={12} className="borderBottom">
          <InputRangedouble />
        </Col>
        <Col xs={12} sm={12} md={12} className="borderBottom">
          <span >  <input type="checkbox" className="singleCheckBox" /> </span><img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png" height="20px" width="100px" alt="not found" />
        </Col>
        <Col xs={12} sm={12} md={12} className="borderBottom" style={{ padding: 0 }}>
          <AccordionComp />
        </Col>
      </div>

    )
  }
}

export default LeftMenuBar
