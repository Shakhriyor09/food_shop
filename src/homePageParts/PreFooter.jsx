import React from "react";
import send from "../assets/images/send.png";
import banner from "../assets/images/banner-9.png.png";
const PreFooter = () => {
  return (
    <div className="flex mx-9 rounded-2xl bg-green-100 mt-10 mb-10">
      <div className="p-5 px-[50px] py-[50px]">
        <p className="text-blue-950 font-bold text-[35px] mt-5 tracking-wide">
          Stay home & get your daily <br />
          needs from our shop
        </p>
        <p className="text-gray-400 mt-3">
          Start You'r Daily Shopping with{" "}
          <span className="text-green-600">Nest Mart</span>{" "}
        </p>
        <img
          src={send}
          height={17}
          width={17}
          className="absolute bottom-[-3479px] left-[104px]"
          alt=""
        />
        <input
          type="email"
          className="p-4 rounded-[25px] px-[50px] mt-[30px] w-[400px]
        "
          placeholder="Your email adress"
        />
        <button className="btn text-white px-10 rounded-[40px] py-4 absolute mt-[29px] left-[300px]">
          Subscribe
        </button>
      </div>
      <div>
        <img
          width={600}
          height={500}
          src={banner}
          alt=""
          className="mt-5 ms-[230px]"
        />
      </div>
    </div>
  );
};

export default PreFooter;
