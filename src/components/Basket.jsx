import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const Basket = () => {
  const {
    fakeData,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    addFromCart,
    deleteCart,
  } = useContext(ShopContext);

  if (!fakeData || !cartItems) {
    return <p>Ma'lumotlar topilmadi</p>;
  }

  return (
    <div>
      <div className=" overflow-x-auto mt-[100px]">
        <table className="w-full text-sm text-left text-[#444]">
          <thead className="bg-[#E9E9E9]">
            <tr className="text-[15px]  font-medium leading-[15px]">
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((item) => {
              if (cartItems[item.id] > 0) {
                return (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 flex items-center gap-[20px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-[60px] h-[60px] border border-stone-300 rounded-md"
                        src={item.image}
                        alt={item.title}
                      />
                      <h2 className=" text-[#444] text-[14px] font-normal leading-[21px] tracking-[0.6px]">
                        {item.title}
                      </h2>
                    </th>
                    <td className="px-6 py-4  text-[#555] text-[15px] font-normal leading-[22.5px] tracking-[0.48px]">
                      {item.price}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-between px-[7px] w-[80px] rounded-md border border-stone-300 gap-1">
                        <button
                          onClick={() => addFromCart(item.id)}
                          className=" text-black text-[16px] font-semibold leading-[24px]"
                        >
                          +
                        </button>
                        <span className="text-[#444] text-[14px] font-semibold leading-[38px]">
                          {" "}
                          {cartItems[item.id]}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-black text-[16px] font-semibold leading-[24px]"
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td className="px-6 w-[250px] py-4 text-[#555] text-[15px] font-normal leading-[22.5px] tracking-[0.48px]">
                      ${item.price * cartItems[item.id]}
                    </td>
                    <td className="px-6 py-4 ">
                      <MdDeleteOutline
                        className="text-[22px] text-[#666] cursor-pointer"
                        onClick={() => deleteCart(item.id)}
                      />
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
        <div className="flex justify-between mt-[41px]">
          <Link to={"/products"}>Continue Shopping</Link>
          <button className="px-[20px] text-center py-[11px] rounded-[5px] bg-[#F53E32]  text-white">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
