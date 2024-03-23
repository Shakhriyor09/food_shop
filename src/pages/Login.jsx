import React, { useState } from "react";
import singapore from "../assets/images/Singaporean.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ProceedLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("http://example.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const token = data.token; // Tokenni oling
        localStorage.setItem("token", token);
        // Save the JWT token received from the server in localStorage or cookies
        toast.success("Logged in successfully!");
        // Redirect the user to another page or perform any necessary action
      } catch (error) {
        toast.error("Login failed: " + error.message);
      }
    }
  };

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const response = await fetch("http://example.com/protected/resource", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // Ishlatish kerak bo'lgan ma'lumotlar
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please enter your username!");
    }

    if (password === "" || password === null) {
      result = false;
      toast.warning("Please enter your password!");
    }
    return result;
  };

  return (
    <section className="flex justify-center">
      <div
        className="ps-[31px] my-14 pe-[31px] container ms:ps-4 w-[400px] h-[403.75px] rounded-[5px] bg-white"
        style={{ border: "1px solid #E9E9E9" }}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <form action="" onSubmit={ProceedLogin}>
          <div className="flex items-center justify-center">
            <img src={singapore} alt="" />
            <h3 className="log_p ">FoodTrove</h3>
          </div>
          <div>
            <label htmlFor="email">
              Email Address <sup className="errmsg">*</sup>
            </label>
            <input
              type="email"
              name="email"
              className="w-[338px] mt-[9px] mb-[29px] p-3 outline-none rounded-[5px] bg-white"
              style={{ border: "1px solid #E9E9E9" }}
              placeholder="Enter Your Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">
              Password <sup className="errmsg">*</sup>
            </label>
            <input
              type="password"
              name="password"
              className="w-[338px] mt-[9px] p-3 outline-none rounded-[5px] bg-white"
              style={{ border: "1px solid #E9E9E9" }}
              placeholder="Enter Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <button
              type="submit"
              className="w-[80px] rounded-[5px] bg-[#F53E32] h-[40px] text-white"
            >
              Login
            </button>
            <button className="texts">Signup</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
