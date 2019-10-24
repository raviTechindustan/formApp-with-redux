import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/auth';
import SignupForm from './SignupForm';
import {validateSignup} from './validations';
class Signup extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: ""
    },
    errors: {}
  }

  onChange = (e) => {
    const { name, value } = e.target;
    const { user = {}, errors = {} } = this.state;

    this.setState({
      user: {
        ...user,
        [name]: value
      },
      errors: {
        ...errors,
        [name]: ''
      }
    })
  }

  signup = (e) => {
    e.preventDefault();
    const { user = {} } = this.state;

    if (this.isValid(user)){
    this.props.signup(user).then(res => {
      this.props.history.push("/Login");
    }).catch(err => {
      console.log(err || "something went wrong")
    })
  }
}

isValid = (data) => {
  const {isValid, errors } = validateSignup(data);
  this.setState({
    errors
  },()=>{
    console.log(this.state.errors)
  })
  return isValid
}


  render() {
    const { user = {}, errors = {} } = this.state;
    return (
      <SignupForm
        user={user}
        errors={errors}
        signup={this.signup}
        onChange={this.onChange}
      />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (data) => dispatch(actions.signup(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);