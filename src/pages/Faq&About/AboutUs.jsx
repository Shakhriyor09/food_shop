import React from "react";
import food from "../../assets/images/Section → 1.jpg.png";
import food from "./Section → 1.jpg.png";
const AboutUs = () => {
  return (
    <div className="mx-auto px-20 ">
      <div className="block md:block sm:block lg:flex gap-5">
        <div className="mb-3">
          <h1 className="font-bold text-3xl">About The Carrot</h1>
          <p className="text-color-gray">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            recusandae necessitatibus quasi incidunt alias adipisci pariatur
            earum iure beatae assumenda rerum quod. Tempora magni autem a
            voluptatibus neque.
          </p>
          <br />
          <p className="text-color-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
            rerum cum accusamus magni consequuntur architecto, ipsum deleniti
            expedita doloribus suscipit voluptatum eius perferendis amet!.
          </p>
          <br />
          <p className="text-color-gray ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, maxime amet architecto est exercitationem optio ea
            maiores corporis beatae, dolores doloribus libero nesciunt qui
            illum? Voluptates deserunt adipisci voluptatem magni sunt sed
            blanditiis quod aspernatur! Iusto?
          </p>
          <br />
          <div className="flex  p-10 background-grayy ">
            <div className="w-1/3 ms-5">
              <div className="flex items-center font-bold">
                <span className="text-8xl text-orangee">3</span>
                <p className="text-5xl font-bold text-color-gray">k</p>
              </div>
              <div className="ms-4">
                <p>vendors</p>
              </div>
            </div>
            <div className="w-1/3 ms-5">
              <div className="flex items-center font-bold">
                <span className="text-8xl text-orangee">3</span>
                <p className="text-5xl font-bold text-color-gray">k</p>
              </div>
              <div className="ms-4">
                <p>vendors</p>
              </div>
            </div>{" "}
            <div className="w-1/3 ms-5">
              <div className="flex items-center font-bold">
                <span className="text-8xl text-orangee">3</span>
                <p className="text-5xl font-bold text-color-gray">k</p>
              </div>
              <div className="ms-4">
                <p>vendors</p>
              </div>
            </div>
          </div>
        </div>
        <img src={food} alt="" />
      </div>
      <div className="block md:block sm:block lg:flex gap-5 py-10">
        <div className="sm:w-full w-full lg:w-1/3 md:w-1/2 mb-3 block max-w-sm pt-45 p-10 text-center background-grayy border border-gray-200 rounded-lg shadow">
          <hr />{" "}
          <h5 className="py-5  text-2xl font-bold tracking-tight text-gray-900   ">
            Product Packing
          </h5>
          <p className="font-normal text-color-gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
        <div className="sm:w-full w-full lg:w-1/3 md:w-1/2 mb-3 block max-w-sm pt-45 p-10 text-center background-grayy border border-gray-200 rounded-lg shadow">
          <hr />{" "}
          <h5 className=" py-5 text-2xl font-bold tracking-tight text-gray-900   ">
            24X7 Support
          </h5>
          <p className="font-normal text-color-gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>{" "}
        <div className="sm:w-full w-full lg:w-1/3 md:w-1/2 mb-3 block max-w-sm pt-45 p-10 text-center background-grayy border border-gray-200 rounded-lg shadow">
          <hr />{" "}
          <h5 className="py-5  text-2xl font-bold tracking-tight text-gray-900   ">
            Delivery in 5 Days
          </h5>
          <p className="font-normal text-color-gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>{" "}
        <div className="sm:w-full w-full lg:w-1/3 md:w-1/2 mb-3 block max-w-sm pt-45 p-10 text-center background-grayy border border-gray-200 rounded-lg shadow">
          <hr />{" "}
          <h5 className="py-5  text-2xl font-bold tracking-tight text-gray-900   ">
            Payment Secure
          </h5>
          <p className="font-normal text-color-gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
