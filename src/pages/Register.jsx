import React, { useState } from "react";
import singapore from "../assets/images/Singaporean.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  toast({
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    });
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfrPssword, setCfrPassword] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Ma'lumot bo'sh joydan iborat bo'lmasligi kerak: ";

    if (fname === null || fname === "") {
      isproceed = false;
      errormessage += "First Name, ";
    }

    if (lname === null || lname === "") {
      isproceed = false;
      errormessage += "Last Name, ";
    }

    if (email === null || email === "") {
      isproceed = false;
      errormessage += "Email, ";
    }

    if (number === null || number === "") {
      isproceed = false;
      errormessage += "Number, ";
    }

    if (address === null || address === "") {
      isproceed = false;
      errormessage += "Address, ";
    }

    if (city === null || city === "") {
      isproceed = false;
      errormessage += "City, ";
    }

    if (code === null || code === "") {
      isproceed = false;
      errormessage += "Code, ";
    }

    if (!isproceed) {
      toast.warning(errormessage.slice(0, -2));
    } else {
      toast.success("Siz muvaffaqiyatli ro'yxatdan o'tdingiz ✅");
    }

    return isproceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (IsValidate()) {
      let regobj = { fname, lname, email, number, address, city, code };
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Siz muvaffaqiyatli ro'yxatdan o'tdingiz ");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Nimadur xato ketdi Qaytadan urinib ko'ring");
        });
    }
  };

  return (
    <section className="flex items-center justify-center">
      <div
        className="container my-14 ps-[31px] pe-[31px] w-[600px] h-[788.88px] bg-white rounded-[5px]"
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

        <ToastContainer />
        <form action="" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
            <img src={singapore} alt="" />
            <h3>FoodTrove</h3>
          </div>
          <div className="flex items-center gap-[24px]">
            <div>
              <label className="texts2" htmlFor="firstname">
                First Name <sup className="errmsg">*</sup>
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter Your First Name"
                className="w-[257px] h-[41.38px] outline-none rounded-[5px] p-3 mt-[9px] mb-[29px]"
                style={{ border: "1px solid #E9E9E9" }}
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div>
              <label className="texts2" htmlFor="lastname">
                Last Name <sup className="errmsg">*</sup>
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter Your Last Name"
                className="w-[257px] h-[41.38px] outline-none rounded-[5px] p-3 mt-[9px] mb-[29px]"
                style={{ border: "1px solid #E9E9E9" }}
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-[24px]">
            <div>
              <label className="texts2" htmlFor="email">
                Email <sup className="errmsg">*</sup>
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter Your email"
                className="w-[257px] h-[41.38px] outline-none rounded-[5px] p-3 mt-[9px] mb-[29px]"
                style={{ border: "1px solid #E9E9E9" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="texts2" htmlFor="phone">
                Phone Number <sup className="errmsg">*</sup>
              </label>
              <input
                required
                type="text"
                name="number"
                placeholder="Enter Your phone number"
                className="w-[257px] h-[41.38px] outline-none rounded-[5px] p-3 mt-[9px] mb-[29px]"
                style={{ border: "1px solid #E9E9E9" }}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-[24px]">
            <div>
              <label className="texts2" htmlFor="email">
                Password <sup className="errmsg">*</sup>
              </label>
              <input
                required
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-[257px] h-[41.38px] outline-none rounded-[5px] p-3 mt-[9px] mb-[29px]"
                style={{ border: "1px solid #E9E9E9" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="texts2" htmlFor="phone">
                Confirm Password <sup className="errmsg">*</sup>
              </label>
              <input
                required
                type="text"
                name="number"
                placeholder="Enter Your Confirm Password"
                className="w-[257px] h-[41.38px] outline-none rounded-[5px] p-3 mt-[9px] mb-[29px]"
                style={{ border: "1px solid #E9E9E9" }}
                value={cfrPssword}
                onChange={(e) => setCfrPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="texts2" htmlFor="address">
              Address <sup className="errmsg">*</sup>
            </label>
            <textarea
              required
              placeholder="Enter your address"
              className="w-[538px] h-[60px] outline-none rounded-[5px] p-3 mt-[9px]"
              style={{ border: "1px solid #E9E9E9" }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
          <div>
            <div className="flex items-center justify-between mt-[29px] gap-6">
              <div>
                <label className="texts2" htmlFor="city">
                  City <sup className="errmsg">*</sup>
                </label>
                <select
                  required
                  type="text"
                  placeholder="City"
                  className="w-[257px] h-[41.38px] p-1 mt-2 bg-[#EFEFEF] text-[#777] rounded-[5px] outline-none mb-[29px]"
                  style={{ border: "1px solid #E9E9E9" }}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="Tashkent" className=" text-[#777]">
                    Tashkent
                  </option>
                  <option value="Karshi" className=" text-[#777]">
                    Qarshi
                  </option>
                  <option value="Samarkand" className=" text-[#777]">
                    Samarqand
                  </option>
                  <option value="Xiva" className=" text-[#777]">
                    Xorazm
                  </option>
                </select>
              </div>
              <div>
                <label className="texts2" htmlFor="city">
                  Post Code
                </label>
                <input
                  required
                  type="text"
                  placeholder="Post Code"
                  className="mb-[29px] mt-2 w-[257px] h-[41.38px] p-3 rounded-[5px] bg-white outline-none"
                  style={{ border: "1px solid #E9E9E9" }}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-6">
              <div className="">
                <label className="texts2" htmlFor="city">
                  Country <sup className="errmsg">*</sup>
                </label>
                <select
                  required
                  type="text"
                  placeholder="City"
                  className="w-[257px] h-[41.38px] p-1 mt-2 bg-[#EFEFEF] text-[#777] rounded-[5px] outline-none mb-[29px]"
                  style={{ border: "1px solid #E9E9E9" }}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="Tashkent" className=" text-[#777]">
                    Uzbekistan
                  </option>
                  <option value="Karshi" className=" text-[#777]">
                    Germany
                  </option>
                  <option value="Samarkand" className=" text-[#777]">
                    England
                  </option>
                  <option value="Xiva" className=" text-[#777]">
                    USA
                  </option>
                </select>
              </div>
              <div className="mb-[30px]">
                <label className="texts2" htmlFor="city">
                  Region State <sup className="errmsg">*</sup>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Region/State"
                  className="w-[257px] h-[41.38px] p-3 mt-2 bg-[#EFEFEF] rounded-[5px] outline-none"
                  style={{ border: "1px solid #E9E9E9" }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className=" w-[80px] rounded-[5px] bg-[#F53E32] h-[40px] text-white">
              Singup
            </button>
            <button className="texts">Have an account?</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
