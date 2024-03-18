import React from "react";
import img1 from "../assets/images/Group 475.png";
import phone from "../assets/images/Phone.png";
import email from "../assets/images/email.png";
import location from "../assets/images/location.png";
import food from "../assets/images/food.png";
import food1 from "../assets/images/food1.png";
import food2 from "../assets/images/food2.png";
const Footer = () => {
  return (
    <div className="flex bg-gray-100 w-full px-5 pt-5 justify-around pb-5">
      <div>
        <img width={160} height={50} src={img1} alt="" />

        <p className="text-gray-400">
          FoodTrove is the biggest market of grocery products. <br /> Get your
          dail needs from our store.
        </p>
        <div className="flex gap-3">
          <div className="pt-5">
            {" "}
            <img src={location} alt="" />
          </div>
          <p
            className="text-gray-400 pt-4
      "
          >
            51 Green St.Huntington ohaio beach ontario, NY <br /> 11746 KY 4783,
            USA.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="pt-3">
            {" "}
            <img src={email} alt="" />
          </div>
          <p className="text-gray-400 pt-2">example@email.com</p>
        </div>
        <div className="flex gap-3">
          <div className="pt-3">
            {" "}
            <img src={phone} alt="" />
          </div>
          <p className="text-gray-400 pt-2">+91 123 4567890</p>
        </div>
      </div>
      <div className="pt-5">
        <p className="font-bold text-lg">Company</p>
        <p className="pt-6 text-gray-400">About us</p>
        <p className="pt-2 text-gray-400">Delievery Information</p>
        <p className="pt-2 text-gray-400">Privacy Policy</p>
        <p className="pt-2 text-gray-400">Terms & Conditions</p>
        <p className="pt-2 text-gray-400">Contact us</p>
        <p className="pt-2 text-gray-400">Support center</p>
      </div>
      <div className="pt-5">
        <p className="font-bold text-lg">Category</p>
        <p className="pt-6 text-gray-400">Dairy & Bakery</p>
        <p className="pt-2 text-gray-400">Fruits & Vegetables</p>
        <p className="pt-2 text-gray-400">Snack & Spice</p>
        <p className="pt-2 text-gray-400">Juice & Drinks</p>
        <p className="pt-2 text-gray-400">Chicken & Meat</p>
        <p className="pt-2 text-gray-400">Fast food</p>
      </div>
      <div className="pt-5">
        <p className="font-bold"> Subscribe Our Newsletter</p>
        <form action="">
          <input
            type="text"
            placeholder="Search here..."
            className="border border-gray-500 px-5 py-1 rounded-[5px] mt-6 w-full"
          />
        </form>
        <div
          className="flex gap-3 pt-5
      "
        >
          <div className="border border-gray-300 bg-white p-[5px] rounded">
            <img
              width="17"
              height="17"
              src="https://img.icons8.com/material-outlined/24/1A1A1A/facebook-f.png"
              alt="facebook-f"
            />
          </div>
          <div className="border border-gray-300 bg-white p-[5px] rounded">
            <img
              width="17"
              height="17 "
              src="https://img.icons8.com/ios/50/1A1A1A/twitterx--v2.png"
              alt="twitterx--v2"
            />
          </div>
          <div className="border border-gray-300 bg-white p-[5px] rounded">
            <img
              width="17"
              height="17"
              src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/1A1A1A/external-basketball-basketball-kmg-design-basic-outline-kmg-design.png"
              alt="external-basketball-basketball-kmg-design-basic-outline-kmg-design"
            />
          </div>
          <div className="border border-gray-300 bg-white p-[4px] rounded">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/sf-regular/48/1A1A1A/instagram-new.png"
              alt="instagram-new"
            />
          </div>
        </div>
        <div className="flex gap-3 pt-5">
          <img width={70} height={80} src={food} alt="" className="rounded" />
          <img
            width={70}
            height={80}
            src="https://www.wbcsd.org/var/site/storage/images/overview/news-insights/wbcsd-insights/accelerating-business-along-the-road-to-a-nature-positive-future/225091-1-eng-GB/Accelerating-business-along-the-road-to-a-nature-positive-future_i1140.jpg"
            alt=""
            className="rounded"
          />
          <img width={70} height={80} src={food1} alt="" className="rounded" />
          <img
            width={70}
            height={80}
            src="https://www.health.com/thmb/an7sDIgAVfL_u752DvBphJx9QTI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1286598299-2000-ab1d74a1f2b744a18145015de57d8e7f.jpg"
            alt=""
            className="rounded"
          />
          <img width={70} height={80} src={food2} alt="" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
