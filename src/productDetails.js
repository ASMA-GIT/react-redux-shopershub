import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProduct } from '../redux/actions/productActions';
import './css/productDetails.css'
import Header from './header';

const ProductDetails = () => {
  const {productId} = useParams();
  const product = useSelector((state)=>state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId!== "") dispatch(fetchProduct(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);


  return (
   <>
    <Header />
    {product && <div className = 'detailPage' key={product.id}>
      <div className = 'productContainer'>
        <div className = 'left'>
          <img src ={product.image} alt={product.title}/>
        </div>
        <div className = 'right'>
          hhkhjk
        </div>
        {/* <div >{product.title}</div> */}
      </div>
    </div>}
    
  </>
  )
}

export default ProductDetails