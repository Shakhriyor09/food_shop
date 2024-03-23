import React from "react";
import sale from "../assets/images/sale-banner.png";
import hand from "../assets/images/hand-banner.png";
import documentary from "../assets/images/document-banner.png";
import customer from "../assets/images/customer-banner.png";
import box from "../assets/images/box-banner.png";
const AboutUs = () => {
  return (
    <div className="px-10 flex gap-2 mt-5 mb-12">
      <div className="w-[19.5%] p-3  flex items-center gap-5 bg-slate-100 rounded-lg">
        <img width={50} height={50} src={sale} alt="" />
        <div>
          <p>Best prices & offers</p>
          <p className="text-gray-400">Orders $50 or more</p>
        </div>
      </div>
      <div className="w-[19.5%]  p-3  flex items-center gap-5 bg-slate-100 rounded-lg">
        <img width={50} height={50} src={hand} alt="" />
        <div>
          <p>Free delivery</p>
          <p className="text-gray-400">24/7 amazing services</p>
        </div>
      </div>
      <div className="w-[19.5%]  p-3  flex items-center gap-5 bg-slate-100 rounded-lg">
        <img width={50} height={50} src={documentary} alt="" />
        <div>
          <p>Great daily deal</p>
          <p className="text-gray-400">When you sign up</p>
        </div>
      </div>
      <div className="w-[19.5%]  p-3  flex items-center gap-5 bg-slate-100 rounded-lg">
        <img width={50} height={50} src={customer} alt="" />
        <div>
          <p>Wide assortment</p>
          <p className="text-gray-400">Mega Discounts</p>
        </div>
      </div>
      <div className="w-[19.5%]  p-3  flex items-center gap-5 bg-slate-100 rounded-lg">
        <img width={50} height={50} src={box} alt="" />
        <div>
          <p>Easy returns</p>
          <p className="text-gray-400">Within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
