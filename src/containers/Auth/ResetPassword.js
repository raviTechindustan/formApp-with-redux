import React, { Component } from 'react'
import ResetPasswordForm from './ResetPasswordForm';



class ResetPassword extends Component {
  state = {
    user: {
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
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
  }


  render() {
    return (
      <React.Fragment>
        <ResetPasswordForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          user={this.user}
        />
      </React.Fragment>
    );
  }
}


export default ResetPassword;