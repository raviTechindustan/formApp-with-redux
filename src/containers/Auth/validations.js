import is from 'is_js';
import { isEmpty } from 'lodash';

export function validateLogin (data) {
  let errors = {};

  if(is.empty(data.email)) {
    errors.email = "Email is required!";
  }

  if((data && data.email) && is.not.email(data.email)) {
    errors.email = "Invalid Email";
  }

  if(is.empty(data.password)) {
    errors.password = "Password is required!";
  }

  return {
    isValid: isEmpty(errors),
    errors
  }
}

export function validateSignup (data) {
  let errors = {};

  if(is.empty(data.firstName)) {
    errors.firstName = "firstName is required!";
  }

  if (is.empty(data.lastName)){
    errors.lastName = "lastname is required!";
  }

  if (is.empty(data.email)) {
    errors.email = "email is required!";
  }

  if ((data && data.email) && is.not.email(data.email)) {
    errors.email = "Invalid Email";
  }
  if (is.empty(data.password)) {
    errors.password = "password is required!";
  }

  if (is.empty(data.confirmpassword)) {
    errors.confirmpassword = "confirmpassword is required!";
  }

  if (data.password !== data.confirmpassword){
    errors.confirmpassword="password does not match";
  }
  return{
    isValid: isEmpty(errors),
    errors
  }
}