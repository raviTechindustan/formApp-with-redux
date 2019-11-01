
const initialState = {
  allProduct: {},
  loading: false,
  product: {},
}

//console.log(initialState.product, "product");

export default function (state = { ...initialState }, action) {
  switch (action.type) {
    case 'ALL_PRODUCT_REQUEST':
      return { ...state, loading: true, error: '' }

    case 'ALL_PRODUCT_SUCCESS':
      //console.log("=====")
      return { ...state, loading: false, allProduct: action.products.values }

    case 'ALL_PRODUCT_FAILED':
      return { ...state, loading: false }

    case 'PRODUCT_REQUEST':
      return { ...state, loading: true }

    case 'PRODUCT_SUCCESS':
      return { ...state, loading: false, product: action.product }

    case 'PRODUCT_FAILED':
      return { ...state, loading: false, error: action.error }
    
    case 'UPDATE_PRODUCT_REQUEST':
      return { ...state, loading:true}
    
    case 'UPDATE_PRODUCT_SUCCESS':
      return {...state ,loading:false, product:action.product}

    case 'UPDATE_PRODUCT_FAILED':
      return {...state , loading:false }

    case 'DELETE_PRODUCT_REQUEST':
      return { ...state, loading: true }

    case 'DELETE_PRODUCT_SUCCESS':
      return { ...state, loading: false }

    case 'DELETE_PRODUCT_FAILED':
      return { ...state, loading: false }
    default:
      return { ...state }
  }
}
