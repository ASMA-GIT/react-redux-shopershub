import React from 'react';
import './css/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <h2>Shoppers Hub</h2>
        <div className='nav-right'>
          <div>
          <ul>
            {/* <li>
              <Link to="/signin">
                Signin
              </Link>
            </li> */}
            <li>
              <Link to="/signup">
                SignUp
              </Link>
            </li>
          </ul>
          </div>
          <Link to="/cart">
          <button className='cart'>Cart</button>
        </Link>
        </div>
    </div>
  )
}

export default Header;
