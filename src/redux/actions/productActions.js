
import {apiStore} from '../../apis/apiStore'
import {actionTypes} from '../constants/action-types';

export const fetchProducts = ()=>{
    return async function (dispatch, getState){
        const endpoint ="/products/"
        try {
            const response = await fetch(`${apiStore.baseURL}${endpoint}`);
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            console.log(data);
            dispatch({type: actionTypes.FETCH_PRODUCTS , payload:data})

          } catch (error) {
            console.error('Error fetching data: ', error);
            throw error;
          }
    }
}

export const fetchProduct = (id)=>{
    return async function (dispatch, getState){
        const endpoint ="/products/"
        try {
            const response = await fetch(`${apiStore.baseURL}${endpoint}${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
              }
            const result = await response.json(); 
            console.log(result);
             dispatch({type: actionTypes.SELECTED_PRODUCT , payload:result})

          } catch (e) {
            console.error(e); 
          }
    }
}

export const setProducts =(products)=>{
    return{
        type: actionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct =(product)=>{
    return{
        type: actionTypes.SELECTED_PRODUCT,
        payload:product,
    }
}
export const removeSelectedProduct = () => {
    return {
      type: actionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };

export const addToCart  =(product)=>{
  console.log("product",product)
    return{
        type: actionTypes.ADD_TO_CART,
        payload:product,
    }
}