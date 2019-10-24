import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/auth';
import LoginForm from './LoginForm';
import { validateLogin } from './validations';

class Login extends Component {
  state = {
    user: {
      email: "",
      password: ""
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
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { user = {} } = this.state;

    if (this.isValid(user)) {
      this.props.login(user).then(res => {
        this.props.history.push("/Dashboard");
      }).catch(err => {
        this.props.history.push("/Login");
      })
    }
  }

  isValid = (data) => {
    const { isValid, errors } = validateLogin(data);
    this.setState({
      errors
    },()=>{
      console.log(this.state.errors);
    })
    return isValid
  }

  render() {
    const { loading = false } = this.props.auth;
    const { user = {}, errors = {} } = this.state;

    return (
      <LoginForm
        loading={loading}
        gggg
        user={user}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        errors={errors}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(actions.login(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);