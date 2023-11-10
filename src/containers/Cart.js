import React from 'react';
import './css/cart.css'
import { useSelector } from 'react-redux';
import Header from './header';

const Cart = () => {
  const cartItems = useSelector(state => state.cartItems.cartItems);
  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);
  console.log("cartItems",cartItems)

  return (
    
    cartItems && cartItems.length > 0 ? (
      <div className='cartPage'>
      < Header />
        <div className='cartDetails'>
          <div className='cartHeading'>
            <h2 >Cart</h2>
          </div>
        <table className='cartTable'>
          <thead>
            <tr>
              <th className="left-align">Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td className='imgCol'>
                  <div className='tableimgcol'>
                    <img src = {item.image} alt={item.title}/>
                    <div className='itemDetails'>
                      <h3>
                        {item.title}
                      </h3>
                      <p>{item.category}</p>
                    </div>
                    </div>
                </td>
                <td>x {item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='grandTotal'>
        <div className='alignRight'>
          <h2>Grand Total: </h2>
          <h2> $ {totalCost}</h2>
        </div>
      </div>
      </div>
      
    ) : (
      <>
        < Header />
        <div className='cartHeading'>
            <h2 >Your cart is empty</h2>
        </div>
        <div>

        </div>
      </>
    )
  );
};

export default Cart;
