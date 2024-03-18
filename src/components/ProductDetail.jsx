import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import start from "../assets/icons/star.svg";
import startRounded from "../assets/icons/star-rounded.svg";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import ShopContext from "../context/ShopContext";
import { IoBasketOutline } from "react-icons/io5";
// import fakeData from "../data";
const ProductDetail = () => {
  const { id } = useParams();
  const { nums, fakeData, increment, decrement, addToCart, getTotalCartItems } =
    useContext(ShopContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const product = fakeData.find((item) => item.id === parseInt(id));
    setProducts(product);
  }, [id, fakeData]);
  const limitedFakeData = fakeData.slice(0, 4);

  if (!products) {
    return <p>Mahsulot topilmadi</p>;
  }

  return (
    <>
      <div className="w-full bg-[#F53E32] h-[72px] flex justify-between items-center mb-[70px]">
        <h2>Product</h2>
        <h2>Home - product</h2>
      </div>
      <div className="flex gap-[60px]">
        <div className="flex gap-[25px]">
          <div className="h-[469px]  overflow-y-scroll no-scrollbar flex flex-col gap-2 ">
            <img className="w-[100px] h-[132px]" src={products?.image} alt="" />
            <img
              className="w-[100px]  h-[132px]"
              src={products?.image}
              alt=""
            />
            <img
              className="w-[100px]  h-[132px]"
              src={products?.image}
              alt=""
            />
            <img
              className="w-[100px]  h-[132px]"
              src={products?.image}
              alt=""
            />
            <img
              className="w-[100px]  h-[132px]"
              src={products?.image}
              alt=""
            />
          </div>
          <img className="w-[469px] h-[469px]" src={products?.image} alt="" />
        </div>
        <div>
          <h2 className="mb-[17px] text-[#2B2B2D] text-[22px] leading-[33px] tracking-[0.48px]">
            {products?.title}
          </h2>
          <p className="text-[#7A7A7A] text-[14px] leading-[24.5px] tracking-[0.48px]">
            {products?.description}
          </p>
          <p className="border-b-[1px] mt-[20px] mb-[23px] border-[#E9E9E9]"></p>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 items-center">
              <img src={start} alt="" />
              <img src={start} alt="" />
              <img src={start} alt="" />
              <img src={start} alt="" />
              <img src={startRounded} alt="" />
            </div>
            <p className=" text-[#7A7A7A] text-[15px] leading-[26.25px] tracking-[0.48px]">
              {" "}
              ({products?.rating?.rate} Review)
            </p>
          </div>
          <div>
            <div className="flex gap-[10px] mb-[18px] mt-6">
              <div className="flex w-[100px] justify-between text-[#2B2B2D] text-[16px] leading-[24px] tracking-[0.48px] font-semibold">
                <p>Brand</p>
                <span>:</span>
              </div>
              <p className="text-[#777] leading-6 tracking-[0.48px]">
                ESTA BETTERU CO
              </p>
            </div>
            <div className="flex gap-[10px] mb-[18px]">
              <div className="flex w-[100px] justify-between text-[#2B2B2D] text-[16px] leading-[24px] tracking-[0.48px] font-semibold">
                <p>Flavour</p>
                <span>:</span>
              </div>
              <p className="text-[#777] leading-6 tracking-[0.48px]">
                Super Saver Pack
              </p>
            </div>
            <div className="flex gap-[10px] mb-[18px]">
              <div className="flex w-[100px] justify-between text-[#2B2B2D] text-[16px] leading-[24px] tracking-[0.48px] font-semibold">
                <p>Diet Type</p>
                <span>:</span>
              </div>
              <p className="text-[#777] leading-6 tracking-[0.48px]">
                Vegetarian
              </p>
            </div>
            <div className="flex gap-[10px] mb-[18px]">
              <div className="flex w-[100px] justify-between text-[#2B2B2D] text-[16px] leading-[24px] tracking-[0.48px] font-semibold">
                <p>Weight</p>
                <span>:</span>
              </div>
              <p className="text-[#777] leading-6 tracking-[0.48px]">
                200 Grams
              </p>
            </div>
            <div className="flex gap-[10px] mb-[18px]">
              <div className="flex w-[100px] justify-between text-[#2B2B2D] text-[16px] leading-[24px] tracking-[0.48px] font-semibold">
                <p>Speciality</p>
                <span>:</span>
              </div>
              <p className="text-[#777] leading-6 tracking-[0.48px]">
                Gluten Free, Sugar Free
              </p>
            </div>
            <div className="flex gap-[10px] mb-[18px]">
              <div className="flex w-[100px] justify-between text-[#2B2B2D] text-[16px] leading-[24px] tracking-[0.48px] font-semibold">
                <p>Info</p>
                <span>:</span>
              </div>
              <p className="text-[#777] leading-6 tracking-[0.48px]">
                Egg Free, Allergen-Free
              </p>
            </div>
            <div className="flex gap-[10px] mb-[38px]">
              <div className="flex w-[100px] justify-between text-[#2B2B2D] text-[16px] leading-[24px] tracking-[0.48px] font-semibold">
                <p>Items</p>
                <span>:</span>
              </div>
              <p className="text-[#777] leading-6 tracking-[0.48px]">1</p>
            </div>
          </div>
          <div className="flex gap-[5px]  mb-[22px] items-center">
            <p className="text-[#F53E32] text-[24px] leading-[28.01px] tracking-[0.48px] font-bold">
              ${products.price}
            </p>
            <p className=" leading-[28px] line-through text-[#7A7A7A]">
              ${products.price}
            </p>
          </div>
          <div className="flex gap-[10px] mb-[23px]">
            <p className="text-[#2B2B2D] text-[16px] font-medium leading-[24.9px] tracking-[0.48px]">
              Size/Weight :
            </p>
            <div className="flex gap-1">
              <button className="bg-transparent hover:bg-[#F53E32] transition text-[#777] font-semibold hover:text-white  px-[11px] py-[4px]  border border-stone-300 hover:border-transparent rounded text-[12px] ">
                50kg
              </button>
              <button className="bg-transparent hover:bg-[#F53E32] transition text-[#777] font-semibold hover:text-white  px-[11px] py-[4px]  border border-stone-300 hover:border-transparent rounded text-[12px] ">
                80kg
              </button>
              <button className="bg-transparent hover:bg-[#F53E32] transition text-[#777] font-semibold hover:text-white  px-[11px] py-[4px]  border border-stone-300 hover:border-transparent rounded  text-[12px]">
                120kg
              </button>
              <button className="bg-transparent hover:bg-[#F53E32] transition text-[#777] font-semibold hover:text-white  px-[11px] py-[4px]  border border-stone-300 hover:border-transparent rounded  text-[12px]">
                200kg
              </button>
            </div>
          </div>
          <div className="flex ">
            <div className="flex gap-[5px] ">
              <div>
                <button className=" rounded border-gray-300 border w-[40px] h-[40px]">
                  {nums}
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => increment()}
                  className="w-[18px] h-[18px] rounded border border-gray-300 flex items-center justify-center"
                >
                  +
                </button>
                <button
                  onClick={() => decrement()}
                  className="w-[18px] h-[18px] rounded border border-gray-300 flex items-center justify-center"
                >
                  -
                </button>
              </div>
            </div>
            <button
              onClick={() => addToCart(products.id, nums)}
              className="bg-[#F53E32] hover:bg-[#fc5454] transition text-white mx-[15px] font-bold py-2 px-4 rounded"
            >
              Add to cart
            </button>
            <div className="flex  gap-[10px]">
              <button className=" rounded border-gray-300 border flex items-center justify-center text-[20px] w-[40px] h-[40px]">
                <FaRegHeart />
              </button>
              <button className=" rounded border-gray-300 border flex items-center justify-center text-[20px] w-[40px] h-[40px]">
                <MdOutlineRemoveRedEye />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 rounded-md border p-[25px] ">
        <div className="flex gap-[30px] mb-[25px]">
          <p className="text-[#F53E32] text-[17px] font-semibold leading-[25.5px] transition-all cursor-pointer hover:text-[#F53E32]">
            Description
          </p>
          <p className="text-[#2B2B2D] text-[17px] font-semibold leading-[25.5px] transition-all cursor-pointer hover:text-[#F53E32]">
            Information
          </p>
          <p className="text-[#2B2B2D] text-[17px] font-semibold leading-[25.5px] transition-all cursor-pointer hover:text-[#F53E32]">
            Review
          </p>
        </div>
        <div className="border-b-[1px] mt-[20px] mb-[23px] border-[#E9E9E9]"></div>
        <p className="text-[#7A7A7A] text-[14px] leading-[24.5px] tracking-[0.48px] mt-[33px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
          sapiente odio, error dolore vero temporibus consequatur, nobis veniam
          odit dignissimos consectetur quae in perferendis doloribusdebitis
          corporis, eaque dicta, repellat amet, illum adipisci vel perferendis
          dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione
          alias odio, error dolore temporibus consequatur, nobis veniam odit
          laborum dignissimos consectetur quae vero in perferendis provident
          quis.
        </p>
        <h2 className=" mt-[32px] text[#2B2B2D] text-[16px] font-medium leading-[0.48px]">
          Packaging & Delivery
        </h2>
        <div className="border-b-[1px] mt-[32px] mb-[32px] border-[#E9E9E9]"></div>
        <p className="text-[#7A7A7A] text-[14px] leading-[24.5px] tracking-[0.48px] mt-[33px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
          perferendis dolor! Quis vel consequuntur repellat distinctio rem.
          Corrupti ratione alias odio, error dolore temporibus consequatur,
          nobis veniam odit laborum dignissimos consectetur quae vero in
          perferendis provident quis.
        </p>
      </div>
      <div className="text-center mt-[101px]">
        <h2 className="text-[32px] mb-[17px] text-[#2B2B2D] font-bold leading-[38.4px] tracking-[0.48px]">
          Popular Products
        </h2>
        <p className="text-[#7A7A7A] mb-[31px]  leading-[22px] tracking-[0.48px] max-w-[595.32px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et viverra maecenas accumsan lacus
          vel facilisis.
        </p>

        <div className={"grid grid-cols-4 mb-[100px]"}>
          {limitedFakeData?.map((item) => (
            <Link
              to={`/productdetails/${item.id}`}
              key={item.id}
              className="w-[306px] p-[13px] border rounded-[5px] bg-white relative"
            >
              <img
                src={item.image}
                alt=""
                className="border rounded-md w-[278px] h-[278px] object-contain"
              />
              <div className="w-[35px] h-[35px] rounded-full border flex items-center justify-center text-lg absolute left-[44%] top-[273px]  bg-[#F7F7F8] cursor-pointer">
                <IoBasketOutline onClick={() => addToCart(item.id)} />
              </div>
              <div className="text-center mt-5">
                <p className="mb-2 text-[#777] text-sm leading-[19.5px] tracking-[0.48px]">
                  {item.category}
                </p>
                <div className="flex justify-center items-center gap-2">
                  <div className="flex gap-1 items-center ">
                    <img src={start} alt="" />
                    <img src={start} alt="" />
                    <img src={start} alt="" />
                    <img src={start} alt="" />
                    <img src={startRounded} alt="" />
                  </div>
                  <p className=" text-[#777] text-[11px] leading-[10px] tracking-[0.48px]">
                    {" "}
                    ({item.rating.rate})
                  </p>
                </div>
                <h2 className="mt-[17.5px] mb-4 text-[#2B2B2D] font-medium text-[15px] leading-[24px] tracking-[0.48]">
                  {item.title}
                </h2>
                <div className="flex gap-[5px] justify-center items-center">
                  <p className="text-[#F53E32] text-base tracking-[0.48px] font-bold">
                    ${item.price}
                  </p>
                  <p className="text-[13px] text-[#7A7A7A]">${item.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
