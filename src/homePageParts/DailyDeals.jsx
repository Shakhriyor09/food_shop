import React from "react";
import dealproduct from "../assets/images/deal-product.png";
import shopping from "../assets/images/cart.png";
const DailyDeals = () => {
  return (
    <div className="px-8 mt-5 mb-[150px]">
      <div className="flex justify-between items-center">
        <p className="text-[32px] text-blue-950 font-semibold">
          Daily Best Sells
        </p>
        <p className="text-gray-400 cursor-pointer">All Deals {">"}</p>
      </div>
      <div className="flex justify-between mt-5 gap-5">
        <div>
          <img height={600} src={dealproduct} alt="" />
          <div className="bg-white w-[300px] px-5 absolute top-[3200px] left-[55px] rounded-lg p-5">
            <p className="font-bold text-blue-950 text-[16px]">
              Seeds of Change Organic Quinoa, <br /> Brown, & Red Rice
            </p>
            <div className="flex gap-7 mt-2">
              <p>⭐</p>
              <p className="text-gray-400">(4.0)</p>
            </div>
            <p className="text-green-500 font-semibold mt-1">
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
        <div>
          <img height={600} src={dealproduct} alt="" />
          <div className="bg-white w-[300px] px-5 absolute top-[3200px] left-[420px] rounded-lg p-5 py-[20px]">
            <p className="font-bold text-blue-950 text-[16px]">
              Seeds of Change Organic Quinoa, <br /> Brown, & Red Rice
            </p>
            <div className="flex gap-7 mt-2">
              <p>⭐</p>
              <p className="text-gray-400">(4.0)</p>
            </div>
            <p className="text-green-500 font-semibold mt-1">
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
        <div>
          <img height={600} src={dealproduct} alt="" />
          <div className="bg-white w-[300px] px-5 absolute top-[3200px] left-[790px] rounded-lg p-5 py-[20px]">
            <p className="font-bold text-blue-950 text-[16px]">
              Seeds of Change Organic Quinoa, <br /> Brown, & Red Rice
            </p>
            <div className="flex gap-7 mt-2">
              <p>⭐</p>
              <p className="text-gray-400">(4.0)</p>
            </div>
            <p className="text-green-500 font-semibold mt-1">
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
        <div>
          <img height={600} src={dealproduct} alt="" />
          <div className="bg-white w-[300px] px-5 absolute top-[3200px] left-[1165px] rounded-lg p-5 py-[20px]">
            <p className="font-bold text-blue-950 text-[16px]">
              Seeds of Change Organic Quinoa, <br /> Brown, & Red Rice
            </p>
            <div className="flex gap-7 mt-2">
              <p>⭐</p>
              <p className="text-gray-400">(4.0)</p>
            </div>
            <p className="text-green-500 font-semibold mt-1">
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
      </div>
    </div>
  );
};

export default DailyDeals;
