import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Button} from "react-bootstrap";
import TopMenuBar from './TopMenuBar';
import Products from "./Products";
import './index.scss';
import { removeObject } from "../../utils"



 class Dashboard extends Component {
  state = {
    local: {},
    values: {}
  }

  onClick = () => {
    removeObject("andy-user");
    removeObject("access-token");
    this.props.history.push("/Login");
  }

   

  render() {

    return (
      <div className="text-right" style={{ backgroundColor:"#0000000d"}}>
        <h3>welcome {this.state.local.firstName}</h3>
        <Button variant="secondary" onClick={() => this.onClick()} style={{}}>LOGOUT</Button>
        <TopMenuBar />
      
        <Products />
     
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    auth: state.auth
  }

}
export default connect(mapStateToProps)(Dashboard);
