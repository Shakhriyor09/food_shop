import React, { useContext } from "react";
import checkImg1 from "../assets/images/Link → 12.jpg.png";

import star from "../assets/icons/div.cr-pro-rating.svg";
import payment from "../assets/icons/payment.png.svg";
import ShopContext from "../context/ShopContext";
const Checkout = () => {
  const { fakeData, cartItems , getTotalCartAmount } = useContext(ShopContext);
  return (
    <section className="checkout">
      <div className="container my-14 ps-[312px] pe-[312px] flex gap-[24px] justify-center">
        <main>
        <section className="summary">
        <div
          className="container w-[416px] p-[16px] rounded-[5px] bg-white"
          style={{ border: "1px solid #E9E9E9" }}
        >
          <h2 style={{ fontWeight: "600" }}>Summary</h2>
          <div className="flex items-center justify-between mb-[10px] mt-[15px]">
            <p className="check">Sub-Total</p>
            <h3 className="text-[#000]">{getTotalCartAmount}</h3>
          </div>
          <div className="flex items-center justify-between mb-[16px]">
            <p className="check">Delivery Charges</p>
            <h3 className="text-[#000]">$0.00</h3>
          </div>
          <hr />
          <div className="flex items-center justify-between mt-[20px] mb-[40px]">
            <h2 className="" style={{ fontWeight: "600" }}>
              Total Amount
            </h2>
            <h3 style={{ fontWeight: "600" }}>{getTotalCartAmount}</h3>
          </div>
          <div className="gap-[15px]">
            {fakeData.map((item) => {
              if (cartItems[item.id] > 0) {
                return (
                  <React.Fragment key={item.id}>
                    <img src={item.image} alt="" className=" w-12" />
                    <div>
                      <p>Dates Value Pack Pouch</p>
                      <img src={star} alt="" />
                      <div className="flex gap-[5px]">
                        <h4
                          className="text-[#64B496]"
                          style={{ fontWeight: "700" }}
                        >
                          $120.25{" "}
                        </h4>
                        <p className="check">$123.25</p>
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
        </div>
</section>


          <section className="delivery mt-[30px]">
            <div
              className="container w-[416px] h-[340px] rounded-[5px] p-[16px] bg-[#FFF]"
              style={{ border: "1px solid #E9E9E9" }}
            >
              <h2
                className="text-[20px] mb-[20px]"
                style={{ fontWeight: "600" }}
              >
                Delivery Method
              </h2>
              <p className="check mb-[20px]">
                Please select the preferred shipping method to use on this
                order.
              </p>
              <div className="flex items-center gap-[86px] mb-[17px]">
                <div>
                  <h3>Free Shipping</h3>
                  <div className="flex gap-[10px]">
                    <input type="radio" />
                    <p className="check">Rate - $0 .00</p>
                  </div>
                </div>
                <div>
                  <h3>Flat Rate</h3>
                  <div className="flex gap-[10px] ">
                    <input type="radio" />
                    <p className="check">Rate - $5.00</p>
                  </div>
                </div>
              </div>
              <div>
                <h3>Add Comments About Your Order</h3>
                <textarea
                  className="w-[384px] h-[100px] rounded-[5px] outline-none p-3 mt-2"
                  style={{ border: "1px solid #E9E9E9" }}
                ></textarea>
              </div>
            </div>
          </section>
          <section className="payment mt-[30px]">
            <div
              className="container p-[16px] w-[416px] h-[217px] outline-none rounded-[5px]"
              style={{ border: "1px solid #E9E9E9" }}
            >
              <h2>Payment Method</h2>
              <p className="check mt-[10px]">
                Please select the preferred payment method to use on this order.
              </p>
              <div className="mt-[15px]">
                <div className="flex items-center gap-[10px] check">
                  <input type="radio" />
                  <p>Cash On Delivery</p>
                </div>
                <div className="flex items-center gap-[10px] check">
                  <input type="radio" />
                  <p>Cash On Delivery</p>
                </div>
                <div className="flex items-center gap-[10px] check">
                  <input type="radio" />
                  <p>Cash On Delivery</p>
                </div>
              </div>
            </div>
          </section>
          <section className="payment__method mt-[30px]">
            <div
              className="container w-[416px] p-[16px] h-[101px] rounded-[5px]"
              style={{ border: "1px solid #E9E9E9" }}
            >
              <h2>Payment Method</h2>
              <img className="mt-[15px]" src={payment} alt="" />
            </div>
          </section>
        </main>
        <div>
          <section className="customer">
            <div
              className="container p-[25px] w-[856px] h-[600px] rounded-[5px] bg-white"
              style={{ border: "1px solid #E9E9E9" }}
            >
              <h2 style={{ fontWeight: "600" }}>
                New <br /> Customer
              </h2>
              <p className="mt-[10px] mb-[16px]">Checkout Options</p>
              <div className="flex gap-[50px]">
                <div className="flex items-center gap-[10px]">
                  <input type="radio" />
                  <p className="check">Register Account</p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input type="radio" />
                  <p className="check">Guest Account</p>
                </div>
              </div>
              <p className="check w-[502px] mt-[10px]">
                By creating an account you will be able to shop faster, be up to
                date on an order's status, and keep track of the orders you have
                previously made.
              </p>
              <button className="w-[106.66px] h-[40px] rounded-[5px] bg-[#F53E32] text-white mt-[25px] mb-[15px]">
                Continue
              </button>
              <h2 className="mb-[24px]" style={{ fontWeight: "600" }}>
                Returning Customer
              </h2>
              <div>
                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    className="w-[806px] h-[50px] outline-none rounded-[5px] p-3 mt-[9px] mb-[18px]"
                    style={{ border: "1px solid #E9E9E9" }}
                    type="text"
                    name="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="email">Password</label>
                  <input
                    className="w-[806px] h-[50px] outline-none rounded-[5px] p-3 mt-[9px]"
                    style={{ border: "1px solid #E9E9E9" }}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[15px] mt-[30px]">
                <button className="w-[84.11px] h-[40px] bg-[#F53E32] rounded-[5px] text-white">
                  Login
                </button>
                <button
                  style={{ fontWeight: "600", textDecoration: "underline" }}
                >
                  Forgot Password?
                </button>
              </div>
            </div>
          </section>
          <section className="details mt-[30px]">
            <div
              className="container w-[856px] h-[556px] p-[25px] rounded-[5px] bg-white"
              style={{ border: "1px solid #E9E9E9" }}
            >
              <h2>Billing Details</h2>
              <h4>Checkout Options</h4>
              <div className="flex items-center gap-12">
                <div className="flex items-center">
                  <input type="radio" />
                  <p className="check">I want to use an existing address</p>
                </div>
                <div className="flex items-center">
                  <input type="radio" />
                  <p className="check">I want to use an new address</p>
                </div>
              </div>
              <div className="flex items-center gap-12 mt-10">
                <div>
                  <label className="texts2" htmlFor="firstname">
                    First Name <sup className="errmsg">*</sup>
                  </label>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your First Name"
                      className="w-[257px] h-[41.38px] outline-none rounded-[5px] p-3 mt-[9px] mb-[29px]"
                      style={{ border: "1px solid #E9E9E9" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="texts2" htmlFor="firstname">
                    Last Name <sup className="errmsg">*</sup>
                  </label>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Last Name"
                      className="w-[257px] h-[41.38px] outline-none rounded-[5px] p-3 mt-[9px] mb-[29px]"
                      style={{ border: "1px solid #E9E9E9" }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <textarea
                  className="w-[808px] h-[50px] rounded-[5px] mt-2 outline-none p-3"
                  placeholder="Address Line 1"
                  style={{ border: "1px solid #E9E9E9" }}
                ></textarea>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <label htmlFor="name">
                    City <sup className="errmsg">*</sup>
                  </label>
                  <input
                    type="text"
                    name="dropdown"
                    placeholder="City"
                    className="outline-none w-[342px] h-[48px] rounded-[5px] p-3  mt-2"
                    style={{ border: "1px solid #E9E9E9" }}
                  />
                </div>
                <div>
                  <label htmlFor="name">Post Name</label>
                  <input
                    type="text"
                    name="name"
                    className="outline-none w-[388px] h-[50px] rounded-[5px] p-3  mt-2"
                    style={{ border: "1px solid #E9E9E9 " }}
                    placeholder="Post Code"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="text-end">
            <button className="w-[140px] h-[40px] rounded-[5px] bg-[#F53E32] mt-[30px] text-white">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
