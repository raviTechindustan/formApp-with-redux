import {
  AllProducts,
  ProductById,
  saveProductById,
  deleteProductById
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

export function ProductsById(id) {

  console.log("data", id)

  return (dispatch) => {
    dispatch({
      type: 'PRODUCT_REQUEST'
    })

    return new Promise((res, rej) => ProductById(id).then(success => {
      dispatch({
        type: 'PRODUCT_SUCCESS',
        product: success
      })
      return res(success);
    }).catch(error => {
      dispatch({
        type: 'PRODUCT_FAILED'
      })
      return rej(error)
    }))
  }
}

export function saveProductId(id, data) {
  console.log("data" ,id)

  return(dispatch) => {
    dispatch({
      type:'UPDATE_PRODUCT_REQUEST'
    })

    return new Promise((res, rej) => saveProductById(id, data).then(success => {
      dispatch({
        type: 'UPDATE_PRODUCT_SUCCESS',
        product: success
      })
      return res(success);
    }).catch(error => {
      dispatch({
        type:'UPDATE_PRODUCT_FAILED'
      })
      return rej(error)
    }))
  }
}

export function deleteProduct(id) {
  console.log("data", id)

  return (dispatch) => {
    dispatch({
      type: 'DELETE_PRODUCT_REQUEST'
    })

    return new Promise((res, rej) => deleteProductById(id).then(success => {
      dispatch({
        type: 'DELETE_PRODUCT_SUCCESS',
        deletedata: success
      })
      return res(success);
    }).catch(error => {
      dispatch({
        type: 'DELETE_PRODUCT_FAILED'
      })
      return rej(error)
    }))
  }
}