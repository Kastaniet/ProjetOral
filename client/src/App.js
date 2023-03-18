import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"
import Products from "./pages/Products/Products"
import Login from "./pages/AuthPage/Login"
import Register from "./pages/AuthPage/Register"
import Profile from './components/Profile/Profile';
import "./app.scss"
import { getToken } from './helpers';
import AddProduct from './pages/Products/AddProduct';

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: "/profile",
        element: getToken() ? < Profile /> : < Navigate to = "/login" />
      },
      {
        path: '/AddProduct',
        element: <AddProduct />
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
