
const initialState = {
  allProduct: {},
  loading: false,
  product: {},
}


export default function (state = { ...initialState }, action) {
  switch (action.type) {
    case 'ALL_PRODUCT_REQUEST':
      return { ...state, loading: true, error: '' }

    case 'ALL_PRODUCT_SUCCESS':
      console.log("=====")
      return { ...state, loading: false, allProduct: action.products }

    case 'ALL_PRODUCT_FAILED':
      return { ...state, loading: false }

    // case 'SIGNUP_REQUEST':
    //   console.log("Signup Rewqwqw runsnd");
    //   return { ...state, loading: true, error: '' }

    // case 'SIGNUP_SUCCESS':
    //   return { ...state, loading: false, message: "Signup SuccesFully" }

    // case 'SIGNUP_FAILED':
    //   return { ...state, loading: false, error: action.error }

    default:
      return { ...state }
  }
}
