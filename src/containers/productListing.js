import React ,{useEffect}from 'react'
import { useDispatch } from 'react-redux';
import './css/productListing.css';
import ProductComponent from './productComponent';
import {fetchProducts} from '../redux/actions/productActions';


const ProductListing = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className='page'>
      <div className='deals'>
          <h2>Grab the greatest deals Here!!!</h2>
        </div>
      <div className='item-container'>
      <ProductComponent />
      </div>
    </div>
  )
}

export default ProductListing;