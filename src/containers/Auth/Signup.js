import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/auth';
import SignupForm from './SignupForm';
import {validateSignup} from './validations';
import {  toast } from "react-toastify";
//import 'react-toastify/dist/ReactToastify.css';

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

      toast.success(res && res.message, {
        position: toast.POSITION.TOP_CENTER
      });
      this.props.history.push("/Login");
    }).catch(err => {
      toast.error(err && err.response && err.response.data && err.response.data.message, {
        position: toast.POSITION.TOP_CENTER
      });
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
    const { loading = false } = this.props;
    return (
      <React.Fragment>
      <SignupForm
        user={user}
        errors={errors}
        signup={this.signup}
        onChange={this.onChange}
        loading={loading}
      />
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  
  return {
    auth: state.auth,
    loading : state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (data) => dispatch(actions.signup(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);