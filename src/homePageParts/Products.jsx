import React from "react";
// import "../components/Home.css";
import OneProduct from "./OneProduct";

const Products = () => {
  return (
    <div className="container">
      <div className="flex justify-between px-[70px] items-center	">
        <p className="font-semibold text-blue-950 text-[30px]">
          Popular Products
        </p>
        <div className="flex gap-4  font-semibold ">
          <p className=" text-blue-950 hover:text-green-500">All</p>
          <p className=" text-blue-950 hover:text-green-500">Milks & Dairies</p>
          <p className=" text-blue-950 hover:text-green-500">Coffes & Teas</p>
          <p className=" text-blue-950 hover:text-green-500">Pet Foods</p>
          <p className=" text-blue-950 hover:text-green-500">Meats</p>
          <p className=" text-blue-950 hover:text-green-500">Vegetables</p>
          <p className=" text-blue-950 hover:text-green-500">Fruits</p>
        </div>
      </div>
      <div className="flex flex-wrap px-[30px] gap-6 py-7 borde">
        <OneProduct />
        <OneProduct />
        <OneProduct />
        <OneProduct />
        <OneProduct />
        <OneProduct />
        <OneProduct />
        <OneProduct />
        <OneProduct />
        <OneProduct />
      </div>
    </div>
  );
};

export default Products;
