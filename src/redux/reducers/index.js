import {combineReducers} from 'redux';
import {productReducer,selectedProductReducer,cartReducer} from './productReducer'

const reducer = combineReducers({
    allProducts: productReducer,
    product : selectedProductReducer,
    cartItems : cartReducer
})

export default reducer;