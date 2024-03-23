import React from "react";

const Carts = () => {
  return (
    <div className=" py-[80px] flex gap-12 px-[30px]">
      <div className="cart1  px-[30px] py-[50px] w-2/6">
        <p className="font-semibold text-[25px]">
          Everyday Fresh & <br /> Clean with Our <br /> Products
        </p>
        <button className="btn px-5 py-2 rounded-md text-white font-semibold mt-5">
          Shop Now
        </button>
      </div>
      <div className="cart2  px-[30px] py-[50px] w-2/6">
        <p className="font-semibold text-[25px]">
          Make your Breakfast <br />
          Healthy and Easy
        </p>
        <button className="btn px-5 py-2 rounded-md text-white font-semibold mt-14">
          Shop Now
        </button>
      </div>
      <div className="cart3  px-[30px] py-[50px] w-2/6">
        <p className="font-semibold text-[25px]">
          The best Organic <br />
          Products Online
        </p>
        <button className="btn px-5 py-2 rounded-md text-white font-semibold mt-14">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Carts;
