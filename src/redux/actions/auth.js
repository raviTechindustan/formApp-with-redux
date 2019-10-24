import {
  loginAPI,
  SignupAPI
} from '../apis/auth';


export function login (data) {

  return (dispatch) => {
    dispatch({
      type: 'LOGIN_REQUEST'
    })

    return new Promise((res, rej) => loginAPI(data).then(success => {
      console.log(success)
      dispatch({
        type: 'LOGIN_SUCCESS',
        user: success
      })
      return res(success);
    }).catch(error => {
      dispatch({
        type: 'LOGIN_FAILED'
      })
      return rej(error)
    }))
  }
}

export  function signup (data) {

  console.log("data",data)

  return (dispatch) => {
    dispatch({
      type:'SIGNUP_REQUEST'
    })

    return new Promise((res, rej) => SignupAPI(data).then(success => {
      dispatch({
        type:'SIGNUP_SUCCESS',
        user:success
      })
      return res(success);
    }).catch(error => {
      dispatch({
        type:'SIGNUP_FAILED'
      })
      return rej(error)
    }))
  }
}