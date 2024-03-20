import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "../components/Product";
import ProductDetail from "../components/ProductDetail";
import Basket from "../components/Basket";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Blog from "../components/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";
import { ToastContainer } from "react-toastify";

const rout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/productdetails/:id" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <ToastContainer theme="colored"></ToastContainer>
      <Footer />
    </BrowserRouter>
  );
};

export default rout;
