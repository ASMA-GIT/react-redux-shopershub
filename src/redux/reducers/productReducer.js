import { actionTypes } from "../constants/action-types"

const initialState ={
    products : []
}
export const productReducer = (state=initialState, {type,payload})=>{
    switch (type){
        case actionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        case actionTypes.FETCH_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state=initialState, {type,payload})=>{
    switch (type){
        case actionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

  
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        const existingProduct = state.cartItems.find(item => item.id === action.payload.id);
        console.log("existingProduct",existingProduct)
        if (existingProduct) {
          alert("Item already exists in cart value incremented by 1");
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          alert("Item added to cart Successfully!!")
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          };
        }
      default:
        return state;
    }
  };