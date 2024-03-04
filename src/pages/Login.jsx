  import React, { useState } from "react";
  import singapore from "../assets/images/Singaporean.png";
import { toast } from "react-toastify";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
  const Login = () => {

    const [username , usernameupdate] =  useState('')
    const [password , passwordupdate] = useState('')

    const ProceedLogin = (e) => {
      Toastify({
        text: "Login successfully completed",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #4ed25b, #659415)",
        },
        onClick: function () {},
      }).showToast();
      e.preventDefault()
      if(validate()){
        
      }
    }

    const validate = () => {
      let result = true ;
      if(username === '' || username === null){
        result = false;
        // toast.warning('Iltimos Username kiriting')
      }

      if(password === '' || password === null){
        result = false;
        // toast.warning('Iltimos Password kiriting')
      }
    }

    return ( 
      <section className="flex justify-center">
        <div
          className="ps-[31px] pe-[31px] container ms:ps-4 w-[400px] h-[403.75px] rounded-[5px] bg-white"
          style={{ border: "1px solid #E9E9E9" }}
        >
          <form action="" onSubmit={ProceedLogin}>
              <div className="flex items-center justify-center">
                <img src={singapore} alt="" />
                <h3 className="log_p ">FoodTrove</h3>
              </div>
              <div>
                <label htmlFor="email">
                  Email Address <sup className="errmsg">*</sup>{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-[338px] mt-[9px] mb-[29px] p-3 outline-none rounded-[5px] bg-white"
                  style={{ border: "1px solid #E9E9E9" }}
                  placeholder="Enter Your Email"
                />
                <label htmlFor="password">
                  Password <sup className="errmsg">*</sup>
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-[338px] mt-[9px]  p-3 outline-none rounded-[5px] bg-white"
                  style={{ border: "1px solid #E9E9E9" }}
                  placeholder="Enter Your password"
                />
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p className="texts">Remember Me</p>
                </div>
                <p className="texts">Forgot password?</p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <button className=" w-[80px] rounded-[5px] bg-[#F53E32] h-[40px] text-white">Login</button>
                <button className="texts">Singup?</button>
              </div>
          </form>
        </div>
      </section>
    );
  };

  export default Login;
