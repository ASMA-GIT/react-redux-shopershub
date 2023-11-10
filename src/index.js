import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import { store } from './redux/store';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import ProductListing from './containers/productListing';
import ProductDetails from './containers/productDetails';
import Cart from './containers/Cart';
import Signin from './containers/Signin';
import SignUp from './containers/SignUp';


const router = createBrowserRouter([

  {
    path: "/home",
    element: ( <App />),
  },
  {
    path: "/product/:productId",
    element: ( <ProductDetails /> ),
  },
  {
    path: "/cart",
    element: ( <Cart /> ),
  },
  {
    path: "/",
    element: ( <Signin /> ),
  },
  {
    path: "/signup",
    element: ( <SignUp />),
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


