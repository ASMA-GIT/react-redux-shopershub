import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProduct, removeSelectedProduct } from '../redux/actions/productActions';
import './css/productDetails.css'
import Header from './header';
import { addToCart } from '../redux/actions/productActions';


const ProductDetails = () => {
  const {productId} = useParams();
  const product = useSelector((state)=>state.product);
  console.log(product.rating)

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  useEffect(() => {
    if (productId && productId!== "") dispatch(fetchProduct(productId));
    return() =>{
      dispatch(removeSelectedProduct())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);


  return (

   <>
    <Header />
    {product && <div className = 'detailPage' key={product.id}>
      <div className = 'productContainer'>
        <div className = 'left'>
          <div className='imgContainer'>
            <img src ={product.image} alt={product.title}/>
          </div>
        </div>
        <div className = 'right'>
        <div className='productTitle'>
            <h2>{product.title}</h2>
            {/* <h5>{product.rating.rate} ratings</h5> */}
            <h1>$ {product.price}</h1>
        </div>
        <div className='productDesc'>
          <h3>{product.category}</h3>
          <p>{product.description}</p>
        </div>
        <div>
          <button className='btn' onClick={() => handleAddToCart(product)}> Add to Cart</button>
        </div>
        </div>
      </div>
    
    </div>}
    
    
  </>
  )
}

export default ProductDetails