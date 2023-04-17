import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Home from './component/Layout/Home';
import Order from './component/Order/Order';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import { cartProductsLoader } from './Loaders/CartProductsLoader';
import Checkout from './component/Checkout/Checkout';
import Signup from './component/SignUp/Signup';
import AuthProvider from './component/provider/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Order></Order>,
        loader: cartProductsLoader
    
      },
      {
        path: 'inventory',
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
