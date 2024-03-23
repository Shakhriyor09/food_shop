import React from "react";
import blogimg from "../assets/images/blog-img.png";
import juice from "../assets/images/juice.png";
import spices from "../assets/images/spices.png";
import next from "../assets/images/next-ico.png";
import message from "../assets/images/message.png";
import food from "../assets/images/food.png";
import food1 from "../assets/images/food1.png";
import food2 from "../assets/images/food2.png";
import water from "../assets/images/water.png";
const Blog = () => {
  return (
    <div className="w-full mb-12">
      <div className="btn p-5 px-[120px] flex justify-between items-center">
        <p className="text-white  text-[27px] ">Blog Details</p>
        <p className="text-white">Home - Blog Details</p>
      </div>
      <div className="px-[120px] flex gap-5 mt-12">
        <div className="w-[72%]  ">
          <img className="w-full" height={500} src={blogimg} alt="" />
          <p className="font-bold my-5 text-gray-500">
            {" "}
            <span className="text-red-500">By Admin</span> / 07 Comment / Date -
            09 ,09 ,2024
          </p>
          <p className="text-[32px] font-semibold">
            Health Benefits of a Row food
          </p>
          <p className="pt-3 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            mollitia nihil sunt reprehenderit natus, soluta officia iure enim{" "}
            <br />
            itaque. Iste qui exercitationem et odit beatae debitis ratione
            molestiae quis atque.
          </p>
          <br />
          <p className="text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
            doloribus dolor odio nobis eum voluptatem laudantium magni <br />{" "}
            veritatis sint! Aspernatur est quisquam modi laudantium. Assumenda
            neque vitae corrupti asperiores, quos vel aliquid hic nisi <br />{" "}
            nostrum repellendus dolorem placeat vero odit.
          </p>
          <div className="flex gap-5 my-8">
            <div
              className="w-[48%] 
            "
            >
              <img src={juice} alt="" height={400} />
              <div
                className="flex mt-2 items-center gap-3 mt-4
              "
              >
                <div className="bg-red-500 w-[25px] rounded-full p-[3px] mb-4">
                  <img height={20} width={20} src={next} alt="" />
                </div>
                <p className="font-bold">
                  Lorem ipsum dolor consectetur adipisicing elit. <br />{" "}
                  Molestias, dolorum!
                </p>
              </div>
            </div>
            <div className="w-[48%]">
              <img src={spices} alt="" height={400} />
              <div
                className="flex mt-2 items-center gap-3 mt-4
              "
              >
                <div className="bg-red-500 w-[25px] rounded-full p-[3px] mb-4">
                  <img height={20} width={20} src={next} alt="" />
                </div>
                <p className="font-bold">
                  Lorem ipsum dolor consectetur adipisicing elit. <br />{" "}
                  Molestias, dolorum!
                </p>
              </div>
            </div>
          </div>
          <div className="border p-7">
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              repellat earum architecto odit soluta quas odio distinctio quae
              numquam? Quaerat nulla blanditiis possimus quae. Iusto doloribus,
              est aliquam delectus pariatur voluptatem cum iste exercitationem
              rem.
            </p>
            <p className="text-red-500 font-bold text-[25px] mt-4">
              John Martin
            </p>
            <img className="ms-[800px]" src={message} alt="" />
          </div>
          <p className="my-5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            officia magni explicabo fuga molestiae architecto ipsa <br />{" "}
            excepturi laudantium molestias, assumenda vel fugiat hic
            exercitationem. Necessitatibus itaque et id! Ratione accusantium{" "}
            <br /> voluptatum optio rerum facilis expedita.
          </p>
          <div className="border flex p-4 rounded-lg justify-between">
            <div className="flex gap-3">
              <div className="border p-1 px-2 rounded-md">
                <p className="text-gray-500 ">Cabbage</p>
              </div>
              <div className="border p-1 px-2 rounded-md">
                <p className="text-gray-500">Appetizer</p>
              </div>
              <div className="border p-1 px-2 rounded-md">
                <p className="text-gray-500">Meat Food</p>
              </div>
            </div>
            <div className="flex gap-4">
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
          </div>
          <div className="flex justify-center mt-7">
            <button className="border px-3 py-1 rounded-s-lg hover:bg-gray-300">
              Previous
            </button>
            <div className="bg-gray-50 px-3 py-1 border hover:bg-red-500 hover:text-white cursor-pointer">
              1
            </div>
            <div className="bg-gray-50 px-3 py-1 border hover:bg-red-500 hover:text-white cursor-pointer">
              2
            </div>
            <div className="bg-gray-50 px-3 py-1 border hover:bg-red-500 hover:text-white cursor-pointer">
              3
            </div>
            <button className="border px-3 py-1 rounded-e-lg hover:bg-gray-300">
              Next
            </button>
          </div>
        </div>
        <div className="w-[25%] h-[1250px] border p-5">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search here..."
              className="border rounded-s-md px-2 py-2"
            />
            <button className="btn p-[11px] rounded-e-lg">
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
          <p className="my-4 font-semibold text-[22px]">All Category</p>
          <div className="border py-2 flex justify-between px-4 text-gray-500">
            <p>Milks & Dairies</p>
            <p>( 56 )</p>
          </div>
          <div className="border py-2 flex justify-between px-4 text-gray-500 my-3">
            <p>Sea Food</p>
            <p>( 34 )</p>
          </div>
          <div className="border py-2 flex justify-between px-4 text-gray-500">
            <p>Fresh Fruit</p>
            <p>( 53 )</p>
          </div>
          <div className="border py-2 flex justify-between px-4 text-gray-500 my-3">
            <p>Pet Food</p>
            <p>( 21 )</p>
          </div>
          <div className="border py-2 flex justify-between px-4 text-gray-500">
            <p>Meat Food</p>
            <p>( 45 )</p>
          </div>
          <p className="my-5 font-semibold text-[22px] ">Recent Post</p>
          <div className="p-3 border rounded-lg">
            <img src={blogimg} className="h-[150px]" alt="" />
            <p className="text-red-500 text-center font-semibold my-2">
              Sep 09, 2023
            </p>
            <p className="font-bold text-blue-950 text-[17px]">
              10 Tasty Organic Fruit choose
            </p>
            <p className="text-center text-gray-500 my-2">
              Lorem ipsum dolor consectetur adipisicing elit.
            </p>
          </div>
          <p className="my-5 font-semibold text-[22px] ">Latest Galery</p>
          <div className="flex flex-wrap">
            <div className="w-[32.5%]">
              <img
                width={70}
                height={80}
                src={food}
                alt=""
                className="rounded"
              />
            </div>
            <div className="w-[32.5%]">
              <img
                width={70}
                height={80}
                src={food1}
                alt=""
                className="rounded"
              />
            </div>
            <div className="w-[32.5%]">
              <img
                width={70}
                height={80}
                src={food2}
                alt=""
                className="rounded"
              />
            </div>
            <div className="w-[32.5%] mt-4">
              <img
                width={70}
                height={120}
                src="https://www.wbcsd.org/var/site/storage/images/overview/news-insights/wbcsd-insights/accelerating-business-along-the-road-to-a-nature-positive-future/225091-1-eng-GB/Accelerating-business-along-the-road-to-a-nature-positive-future_i1140.jpg"
                alt=""
                className="rounded w-[70px] h-[67px]"
              />
            </div>
            <div className="w-[32.5%] mt-4">
              <img
                width={70}
                height={80}
                src="https://www.health.com/thmb/an7sDIgAVfL_u752DvBphJx9QTI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1286598299-2000-ab1d74a1f2b744a18145015de57d8e7f.jpg"
                alt=""
                className="rounded w-[70px] h-[67px]"
              />
            </div>
            <div className="w-[32.5%] mt-4">
              <img src={water} alt="" width={70} height={80} />
            </div>
          </div>
          <p className="my-5 font-semibold text-[22px] ">Popular Tags</p>
          <div className="flex flex-wrap gap-3">
            <div className="px-2 py-1 border text-gray-500 rounded-lg">
              <p>Vegetables</p>
            </div>
            <div className="px-2 py-1 border text-gray-500 rounded-lg">
              <p>Juice</p>
            </div>
            <div className="px-2 py-1 border text-gray-500 rounded-lg">
              <p>Meat Food</p>
            </div>
            <div className="px-2 py-1 border text-gray-500 rounded-lg">
              <p>Cabbage</p>
            </div>
            <div className="px-2 py-1 border text-gray-500 rounded-lg">
              <p>Organic Food</p>
            </div>
            <div className="px-2 py-1 border text-gray-500 rounded-lg">
              <p>Juice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
