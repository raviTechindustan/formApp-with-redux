import { saveObject } from '../../utils';

const initialState = {
  user: {},
  loading: false,
  error: '',
  message : ''
}


export default function( state = { ...initialState}, action) {
  switch(action.type) {
    case 'LOGIN_REQUEST': 
      return { ...state, loading: true, error: '' }

    case 'LOGIN_SUCCESS':
      console.log("=====")
      saveObject("andy-user", JSON.stringify(action.user));
      saveObject("access-token", action.user.token);
      return { ...state, loading: false, user: action.user, message : "Logged In SuccesFully" }

    case 'LOGIN_FAILED':
      return { ...state, loading: false, error: action.error }

    case 'SIGNUP_REQUEST':
      return { ...state, loading: true, error: '' }
    
    case 'SIGNUP_SUCCESS':
      return { ...state, loading: false,  message: "Signup In SuccesFully" }

    case 'SIGNUP_FAILED':
      return { ...state, loading: false, error: action.error }

    default:
      return state
  }
}

