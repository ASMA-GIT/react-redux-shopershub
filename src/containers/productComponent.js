import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './css/productComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/productActions';



const ProductComponent = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }
    useEffect(() => {
        const sr = ScrollReveal();
    
        sr.reveal(".productCard", {
          duration: 600,
          distance: "20px",
          easing: "ease-out",
          origin: "bottom",
          reset: true,
          scale: 1,
          viewFactor: 0,
        }, 150);
    
        sr.reveal(".img, .desc", {
          duration: 500,
          scale: 1,
          distance: "20px",
          origin: "bottom",
          reset: true,
          easing: "ease-out",
          viewFactor: 1
        }, 75);
    
        return () => {
          sr.destroy();
        };
      }, []);

      const products = useSelector((state)=>state.allProducts.products)

      const renderList = products.map((product)=>{
        const {id,title,image,price} = product
        return (<div className='productCard' key={id}>
            <Link to={`/product/${id}`}>
                <div className='img' >
                <div>
                    <img src={image} alt={title} /> 
                </div>
                </div>
                <div className='desc'>
                  <p>{title}</p>
                </div>
                <h5>$ {price}</h5>
                
            </Link>
            <div>
                <button className = 'btn'onClick={() => handleAddToCart(product)}> Add to Cart</button>
            </div>
            
      </div>)
      })

  return (
    <>{renderList}</>
  )
}

export default ProductComponent;