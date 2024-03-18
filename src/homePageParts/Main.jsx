import React from "react";
import send from "../assets/images/send.png";
import greenery from "../assets/images/banner-13.png.png";
const Main = () => {
  return (
    <div className="box mx-auto w-full big h-[100vh] flex mt-4">
      <div className="w-3/6 border  py-[170px] ps-[100px]">
        <p className="display-1 text-[22px] font-bold">
          {" "}
          <span className="text-red-600 underline underline-offset-[5px] font-bold">
            100%
          </span>{" "}
          Organic Vegetables
        </p>
        <h1 className="text-[55px] font-bold leading-[50px] mt-7">
          The best way to <br /> stuff your wallet.
        </h1>
        <p className="text-gray-500 mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet <br />
          reiciendis beatae consequuntur.
        </p>
        <img
          src={send}
          height={17}
          width={17}
          className="absolute bottom-[90px] left-[115px]"
          alt=""
        />
        <input
          type="email"
          className="p-4 rounded-l-[15px] px-[50px] mt-[30px] w-[350px]
        "
          placeholder="Your email adress"
        />

        <button className="bg-green-500 px-7 py-[17px] rounded-[25px] text-white absolute top-[600px] left-[380px]">
          Subscribe
        </button>
      </div>
      <div className="w-3/6 border  ps-[100px] pt-[180px]">
        <div className="flex gap-5 flex-wrap">
          <div className="bg-white px-3 py-2 flex rounded-3xl gap-3 drop-shadow-2xl cursor-pointer">
            {" "}
            <p className="text-gray-300 text-[19px] leading-5 cursor-pointer">
              x
            </p>
            <p className="text-green-500 hover:text-black">Shopping</p>
          </div>
          <div className="bg-white px-3 py-2 flex rounded-3xl gap-3 drop-shadow-2xl cursor-pointer">
            {" "}
            <p className="text-gray-300 text-[19px] leading-5 cursor-pointer">
              x
            </p>
            <p className="text-green-500 hover:text-black">Recips</p>
          </div>
          <div className="bg-white px-3 py-2 flex rounded-3xl gap-3 drop-shadow-2xl cursor-pointer">
            {" "}
            <p className="text-gray-300 text-[19px] leading-5 cursor-pointer">
              x
            </p>
            <p className="text-green-500 hover:text-black">Kitchen</p>
          </div>
          <div className="bg-white px-3 py-2 flex rounded-3xl gap-3 drop-shadow-2xl cursor-pointer">
            {" "}
            <p className="text-gray-300 text-[19px] leading-5 cursor-pointer">
              x
            </p>
            <p className="text-green-500 hover:text-black">News</p>
          </div>
          <div className="bg-white px-3 py-2 flex rounded-3xl gap-3 drop-shadow-2xl cursor-pointer">
            {" "}
            <p className="text-gray-300 text-[19px] leading-5 cursor-pointer">
              x
            </p>
            <p className="text-green-500 hover:text-black">Food</p>
          </div>
        </div>
        <img src={greenery} className="mt-9 " alt="" />
      </div>
    </div>
  );
};

export default Main;
