import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import account from "../assets/images/user.png";
import wishlist from "../assets/images/e-commerce.png";
import cart from "../assets/images/shopping-cart-empty-side-view.png";
import img1 from "../assets/images/Group 475.png";
import menu from "../assets/images/free-icon-menu-9386236.png";
import ShopContext from "../context/ShopContext";
const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="w-full bg-white">
      <div className="border p-[15px] shadow-md drop-shadow-2xl flex justify-around ">
        <div className="p-1 border rounded">
          <img
            width={20}
            height={10}
            src={menu}
            alt=""
            className="cursor-pointer"
          />
        </div>

        <div className="flex gap-5 font-semibold">
          <Link to={"/"}>
            <p className="text-dark fw-bold">Home</p>
          </Link>
          <Link to={"/products"} className="text-dark fw-bold">
            Products
          </Link>
          <p className="text-dark fw-bold">Pages</p>
          <Link to={"/blog"}>
            <p className="text-dark fw-bold">Blog</p>
          </Link>

          <p className="text-dark fw-bold">Elements</p>
        </div>
        <div className="flex align-items-center gap-2">
          <img
            width={20}
            height={15}
            src="https://cdn0.iconfinder.com/data/icons/web-user-interface/50/10-512.png"
            alt=""
          />
          <p>+123 ( 456 ) ( 7890 )</p>
        </div>
      </div>
      <div className="p-[5px] flex justify-around border border-b-gray-400 sticky ">
        <Link to={"/"}>
          <img width={140} height={140} src={img1} alt="" />
        </Link>

        <div className="flex justify-center align-items-center mb-[20px] pt-4">
          <input
            placeholder="Search For items..."
            type="text"
            className="rounded-s-lg h-[40px] px-5 border border-green-700 w-[400px]"
          />
          <button className="text-sm border border-green-700 bg-white h-[40px] px-4">
            All Categories{" "}
          </button>
          <button className="text-center btn h-[40px] text-white bg-red-500 px-4 ">
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="20px"
              height="20px"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
            </svg>
          </button>
        </div>
        <div className="flex gap-4 justify-center align-middle p-5">
          <div className="flex justify-between h-[20px] gap-2">
            <img width={20} height={5} src={account} alt="" />
            <p>Account</p>
          </div>
          <div className="flex justify-between h-[20px] gap-2">
            <img width={20} height={5} src={wishlist} alt="" />
            <p>Wishlist</p>
          </div>
         <Link to={'/basket'}>
         <div className="flex justify-between w-[22px] h-[22px] relative gap-2">
            <img width={20} height={5} src={cart} alt="" />
            <p>Cart</p>
            <div className="w-[22px] h-[22px] relative">
              <p className=" w-[17px] h-[17px] flex justify-center items-center rounded-full bg-[#F53E32] absolute top-[-8px] right-[34px] text-white">
                {" "}
                {getTotalCartItems()}
              </p>
              <span className="text-[22px]"></span>
            </div>
          </div>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
