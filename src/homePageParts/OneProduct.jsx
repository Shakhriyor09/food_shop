import React from "react";
import shopping from "../assets/images/cart.png";
const OneProduct = () => {
  return (
    <div className="w-[18.5%] h-[440px] border-2 border-gray-300 rounded-[20px] p-[1.4px] pb-2">
      <div className="product h-[55%] w-full"></div>
      <div className="h-[45%] w-full px-3">
        <p className="text-gray-400">Snack</p>
        <p className="font-semibold">
          Fresh organic villa farm lomon <br /> 500gm pack
        </p>
        <div className="flex gap-7 mt-2">
          <p>⭐</p>
          <p className="text-gray-400">(4.0)</p>
        </div>
        <p className="text-red-500 font-semibold mt-1">
          <span className="text-gray-400">By</span> Nestfood
        </p>
        <div className="flex justify-between mt-2">
          <p
            className="text-green-600 font-bold text-[22px]
  "
          >
            $28.85{" "}
            <span className="text-md text-gray-400 text-[15px] line-through">
              $32.8
            </span>
          </p>
          <button
            className="btn rounded text-white px-4 flex items-center gap-1
        "
          >
            <img
              src={shopping}
              className="text-white font-semibold"
              height={17}
              width={17}
              alt=""
            />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
