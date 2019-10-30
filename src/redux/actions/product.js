import {
  AllProducts,
  ProductById
} from '../apis/product';


export function AllProduct() {

  return (dispatch) => {
    dispatch({
      type: 'ALL_PRODUCT_REQUEST'
    })

    return new Promise((res, rej) => AllProducts().then(success => {
      console.log(success)
      dispatch({
        type: 'ALL_PRODUCT_SUCCESS',
        products: success
      })
      return res(success);
    }).catch(error => {
      dispatch({
        type: 'ALL_PRODUCT_FAILED'
      })
      return rej(error)
    }))
  }
}

// export function signup(data) {

//   console.log("data", data)

//   return (dispatch) => {
//     dispatch({
//       type: 'SIGNUP_REQUEST'
//     })

//     return new Promise((res, rej) => SignupAPI(data).then(success => {
//       dispatch({
//         type: 'SIGNUP_SUCCESS',
//         user: success
//       })
//       return res(success);
//     }).catch(error => {
//       dispatch({
//         type: 'SIGNUP_FAILED'
//       })
//       return rej(error)
//     }))
//   }
// }