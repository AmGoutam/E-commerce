import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import CartPage from "./pages/CartPage";
import Checkout from './pages/Checkout';
import ProductsDetailsPage from './pages/ProductsDetailsPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/products-details",
    element: <ProductsDetailsPage/>
  },
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
