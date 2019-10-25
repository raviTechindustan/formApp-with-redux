import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Button} from "react-bootstrap";

 class Dashboard extends Component {
  state = {
    local :{}
  }
  
  componentDidMount = () => {
    if (!localStorage.getItem("andy-user")) {
      this.props.history.push("/login")
    }
    else {
      let item = JSON.parse(localStorage.getItem("andy-user"));
      console.log(item ,"this is storage")
      this.setState({ local: item }, () => { console.log(this.state.local);})
   
    }
  }

  onClick = () =>{
    localStorage.clear();
    this.props.history.push("/Login");
  }

  render() {

    return (
      <div className="text-center">
        <p>welcome {this.state.local.firstName}</p>
        <Button variant="secondary" onClick={this.onClick}>LOGOUT</Button>
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
