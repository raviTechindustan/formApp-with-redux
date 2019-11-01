import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Button} from "react-bootstrap";
import TopMenuBar from './TopMenuBar';
import Products from "./Products";
import './index.scss';



 class Dashboard extends Component {
  state = {
    local: {},
    values: {}
  }
  
  componentDidMount = () => {
    if (!localStorage.getItem("andy-user")) {
      this.props.history.push("/login")
    }
    else {
      let item = JSON.parse(localStorage.getItem("andy-user"));
     // console.log(item ,"this is storage")

      this.setState({ local: item }, () => { /*console.log(this.state.local)*/;})
   
    }
  }

  onClick = () =>{
    localStorage.clear();
    this.props.history.push("/Login");
  }

   

  render() {

    return (
      <div className="text-right" style={{ backgroundColor:"#0000000d"}}>
        <h3>welcome {this.state.local.firstName}</h3>
        <Button variant="secondary" onClick={this.onClick} style={{}}>LOGOUT</Button>
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
