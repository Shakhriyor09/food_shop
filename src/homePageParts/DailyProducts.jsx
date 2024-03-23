import React from "react";
import "../components/Home.css";
import next from "../assets/images/next-ico.png";
const DailyProducts = () => {
  return (
    <div
      className="px-8 pb-5
    "
    >
      <p className=" text-blue-950 font-semibold text-[32px] ms-[50px]">
        Daily Best Sells
      </p>
      <div className="flex flex-wrap gap-6 mt-5">
        <div className="daily border px-14 pt-8 h-[470px] rounded-lg">
          <p className="text-white text-[40px] font-semibold">
            Bring nature <br /> into your <br /> home
          </p>
          <button className="btn text-white rounded-lg px-3 py-[8px] flex gap-2 mt-[100px]">
            Show Now{" "}
            <img
              width="20"
              height="20"
              className="mt-[2px]"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/long-arrow-right.png"
              alt="long-arrow-right"
            />
          </button>
        </div>
        <div className="border-2 border-gray-300 rounded-[15px] w-[250px]">
          <div className="daily2 h-[50%]"></div>
          <div className=" h-[50%] px-2 py-2">
            <p className="text-gray-400">Hodo foods</p>
            <p className="text-blue-950 font-semibold text-lg">
              All Natural Italian-Style <br /> Chicken Meatballs
            </p>
            <p>⭐</p>
            <p className="text-green-500 font-bold text-[20px] gap-3 flex items-center">
              $238.85{" "}
              <span className="text-gray-400 text-[15px] line-through">
                $245.8
              </span>
            </p>
            <div className="w-full h-[6px] flex mt-2">
              <div className="bg-red-500 w-1/2 rounded-s-md"></div>
              <div className="bg-gray-400 w-1/2 rounded-e-md"></div>
            </div>
            <p
              className="text-sm text-blue-950 mt-1
            "
            >
              Sold: 90/120
            </p>
            <button className="btn w-full py-[7px] text-white font-semibold rounded mt-2 text-[15px]">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="border-2 border-gray-300 rounded-[15px] w-[250px]">
          <div className="daily2 h-[50%]"></div>
          <div className=" h-[50%] px-2 py-2">
            <p className="text-gray-400">Hodo foods</p>
            <p className="text-blue-950 font-semibold text-lg">
              All Natural Italian-Style <br /> Chicken Meatballs
            </p>
            <p>⭐</p>
            <p className="text-green-500 font-bold text-[20px] gap-3 flex items-center">
              $238.85{" "}
              <span className="text-gray-400 text-[15px] line-through">
                $245.8
              </span>
            </p>
            <div className="w-full h-[6px] flex mt-2">
              <div className="bg-red-500 w-1/2 rounded-s-md"></div>
              <div className="bg-gray-400 w-1/2 rounded-e-md"></div>
            </div>
            <p
              className="text-sm text-blue-950 mt-1
            "
            >
              Sold: 90/120
            </p>
            <button className="btn w-full py-[7px] text-white font-semibold rounded mt-2 text-[15px]">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="border-2 border-gray-300 rounded-[15px] w-[250px]">
          <div className="daily2 h-[50%]"></div>
          <div className=" h-[50%] px-2 py-2">
            <p className="text-gray-400">Hodo foods</p>
            <p className="text-blue-950 font-semibold text-lg">
              All Natural Italian-Style <br /> Chicken Meatballs
            </p>
            <p>⭐</p>
            <p className="text-green-500 font-bold text-[20px] gap-3 flex items-center">
              $238.85{" "}
              <span className="text-gray-400 text-[15px] line-through">
                $245.8
              </span>
            </p>
            <div className="w-full h-[6px] flex mt-2">
              <div className="bg-red-500 w-1/2 rounded-s-md"></div>
              <div className="bg-gray-400 w-1/2 rounded-e-md"></div>
            </div>
            <p
              className="text-sm text-blue-950 mt-1
            "
            >
              Sold: 90/120
            </p>
            <button className="btn w-full py-[7px] text-white font-semibold rounded mt-2 text-[15px]">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="border-2 border-gray-300 rounded-[15px] w-[250px]">
          <div className="daily2 h-[50%]"></div>
          <div className=" h-[50%] px-2 py-2">
            <p className="text-gray-400">Hodo foods</p>
            <p className="text-blue-950 font-semibold text-lg">
              All Natural Italian-Style <br /> Chicken Meatballs
            </p>
            <p>⭐</p>
            <p className="text-green-500 font-bold text-[20px] gap-3 flex items-center">
              $238.85{" "}
              <span className="text-gray-400 text-[15px] line-through">
                $245.8
              </span>
            </p>
            <div className="w-full h-[6px] flex mt-2">
              <div className="bg-red-500 w-1/2 rounded-s-md"></div>
              <div className="bg-gray-400 w-1/2 rounded-e-md"></div>
            </div>
            <p
              className="text-sm text-blue-950 mt-1
            "
            >
              Sold: 90/120
            </p>
            <button className="btn w-full py-[7px] text-white font-semibold rounded mt-2 text-[15px]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyProducts;
