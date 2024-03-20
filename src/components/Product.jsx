import React, { useContext, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { GrSort } from "react-icons/gr";
import { AiOutlineTable } from "react-icons/ai";
import { IoBasketOutline } from "react-icons/io5";
import ShopContext from "../context/ShopContext";
// import fakeData from "../data";
import start from "../assets/icons/star.svg";
import startRounded from "../assets/icons/star-rounded.svg";
import { Link } from "react-router-dom";

const Product = () => {
  const { addToCart, fakeData, getTotalCartItems } = useContext(ShopContext);
  console.log(fakeData);
  const [toggle, setToggle] = useState(false);
  const [maxPrice, setMaxPrice] = useState(250);
  const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // console.log(toggle);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = currentPage * recordsPerPage - 1;
  const records = fakeData.slice(firstIndex, lastIndex + 1);
  const npage = Math.ceil(fakeData.length / recordsPerPage);
  const numbers = [...Array(npage).keys()].map((num) => num + 1);

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };
  const fitleredItems = fakeData.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };
  // const handleClick = (event) => {
  //   setSelectedCategory(event.target.value);
  // };
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredProducts.filter(({ title }) =>
        title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, newPrice, color }) =>
          category === selected || newPrice <= selected
      );
    }

    return filteredProducts;
  }

  function filterByPrice(price, products) {
    const res = products.filter((item) => item.newPrice <= price);
    return setProducts(res);
  }

  function filterByCategory(category, products) {
    if (products) {
      const res = products.filter((item) => item.category === category);
      return setProducts(res);
    }
    return [];
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  return (
    <div className=" container m-auto">
      <div className="w-full bg-[#F53E32] h-[72px] flex justify-between items-center">
        <h2>Shop {getTotalCartItems()}</h2>
        <h2>Home - Shop</h2>
      </div>
      <section>
        <div className=" mt-[100px] flex gap-6">
          <div
            className={
              toggle
                ? " hidden"
                : "w-[306px] h-[650px] rounded-md border bg-[#F7F7F8] px-6 py-[26px] border-[#E9E9E9] sticky top-6"
            }
          >
            <h2 className="text-[#2B2B2D] text-4 font-medium leading-[25.6px] tracking-[0.48px]">
              Product Category
            </h2>
            <div className="border-b-[1px]  mt-[13px] mb-[28px] border-[#E9E9E9]"></div>
            <div className="flex items-center mb-4 justify-between">
              <div className="flex items-center gap-[10px]">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  checked={selectedCategory === "Vegetables"}
                  onChange={() => setSelectedCategory("Vegetables")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Milk
                </label>
              </div>
              <p>[20]</p>
            </div>
            <div className="flex items-center mb-4 justify-between">
              <div className="flex items-center gap-[10px]">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  checked={selectedCategory === "Milk"}
                  onChange={() => setSelectedCategory("Milk")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Milk
                </label>
              </div>
              <p>[20]</p>
            </div>
            <div className="flex items-center mb-[26px] justify-between">
              <div className="flex items-center gap-[10px]">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Snack & Spice
                </label>
              </div>
              <p>[20]</p>
            </div>
            <h2 className="text-[#2B2B2D] text-4 font-medium leading-[25.6px] tracking-[0.48px]">
              Filter By Price
            </h2>
            <div className="border-b-[1px]  mt-[13px] mb-[28px] border-[#E9E9E9]"></div>

            <input
              type="range"
              className="w-full accent-[#F53E32]"
              min={0}
              max={250}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <div className="flex gap-[5px] items-center mt-[18px]">
              <p className="text-[#000] text-[15px] font-bold leading-[18px] tracking-[0.48px]">
                Price:{" "}
              </p>{" "}
              <span className="text-[#7A7A7A]">$0 - {maxPrice}</span>
            </div>
            <button
              onClick={() => {
                const filteredResult = filteredData(
                  fakeData,
                  selectedCategory,
                  query
                );
                // console.log(filteredResult);

                const filteredByPrice = filterByPrice(maxPrice, filteredResult);
                const filteredByCategory = filterByCategory(
                  selectedCategory,
                  filteredByPrice
                );

                // console.log(filteredByCategory);
              }}
              className="py-[12px] px-[22px] mt-[21px] rounded-md bg-[#F53E32] leading-[16.8px] font-bold text-white "
            >
              Filter
            </button>
            <h2 className="text-[#2B2B2D] text-4 font-medium leading-[25.6px] tracking-[0.48px] mt-[26px]">
              Product Category
            </h2>
            <div className="border-b-[1px]  mt-[13px] mb-[28px] border-[#E9E9E9]"></div>
            <div className="flex items-center mb-4  mt-[28px] justify-between">
              <div className="flex items-center gap-[10px]">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="text-[#7A7A7A] text-sm tracking-[0.48px]"
                >
                  Blue
                </label>
              </div>
              <p className=" w-[20px] h-[20px] rounded-[5px] bg-[#6C9EFF]"></p>
            </div>
            <div className="flex items-center mb-4 justify-between">
              <div className="flex items-center gap-[10px]">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="text-[#7A7A7A] text-sm tracking-[0.48px]"
                >
                  Yellow
                </label>
              </div>
              <p className=" w-[20px] h-[20px] rounded-[5px] bg-[#DEDE44]"></p>
            </div>
            <div className="flex items-center mb-4 justify-between">
              <div className="flex items-center gap-[10px]">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="text-[#7A7A7A] text-sm tracking-[0.48px]"
                >
                  Red
                </label>
              </div>
              <p className=" w-[20px] h-[20px] rounded-[5px] bg-[#FB5555]"></p>
            </div>
          </div>
          <div className="flex-1">
            <div className="p-[6px] border-1 gap-2 bg-[#F7F7F8] flex justify-between items-center mb-[30px] w-full">
              <div className="flex gap-[5px] items-center">
                <span
                  className={
                    toggle
                      ? "p-[7.5px] w-[35px] h-[35px] rounded border bg-white text-xl flex items-center justify-center "
                      : "p-[7.5px] w-[35px] h-[35px] rounded border bg-[#F53E32] text-white text-xl flex items-center justify-center "
                  }
                  onClick={() => setToggle(!toggle)}
                >
                  <CiFilter />
                </span>
                <span className="p-[7.5px] w-[35px] h-[35px]  rounded border bg-white text-xl flex items-center justify-center">
                  <GrSort />
                </span>
                <span className="p-[7.5px] w-[35px] h-[35px]  rounded border bg-white text-xl flex items-center justify-center">
                  <AiOutlineTable />
                </span>
              </div>
              <input
                className="flex-1 border-none outline-none bg-[#F7F7F8] text-[#7A7A7A] text-sm tracking-[0.48px]"
                type="text"
                name="text"
                placeholder="We found 29 items for you!"
              />
              <div className="flex items-center gap-2 py-1 pr-1 pl-4 h-[35px] rounded-[5px] border bg-white">
                <p className="block">Sort By :</p>
                <select
                  id="countries"
                  className="text-sm border-none w-fit h-full outline-none"
                  defaultValue="Featured"
                >
                  <option value="Featured">Featured</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="juice">Juice</option>
                  <option value="Food">Food</option>
                  <option value="Dry Fruits">Dry Fruits</option>
                </select>
              </div>
            </div>
            <div className="flex gap-6 justify-center">
              <div
                className={
                  toggle
                    ? "grid grid-cols-4 gap-6 "
                    : "grid grid-cols-3  gap-6 "
                }
              >
                {fakeData?.map((item) => (
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
                        <p className="text-[13px] text-[#7A7A7A]">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <nav className="mt-[35px] mb-[100px] mx-auto text-center w-full">
              <ul className="inline-flex -space-x-px text-sm">
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-center px-3 py-[11px]  ms-0 text-[16px] leading-[24px] tracking-[0.48px] text-[#777] bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-[#F53E32] hover:text-white hover:border-[#F53E32]"
                    onClick={() => prePage()}
                  >
                    Previous
                  </Link>
                </li>
                {numbers.map((num, i) => (
                  <li
                    className={`page-item  ${
                      currentPage === num ? "active" : ""
                    }  `}
                    key={i}
                  >
                    <Link
                      href="#"
                      className="flex items-center justify-center  text-[16px] leading-[24px] tracking-[0.48px] text-[#777] bg-white border border-gray-300  px-[14px] py-[11px] hover:bg-[#F53E32] hover:text-white hover:border-[#F53E32]"
                      onClick={() => changePage(num)}
                    >
                      {num}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-center px-3 py-[11px]  ms-0 text-[16px] leading-[24px] tracking-[0.48px] text-[#777] bg-white border border-e-0 border-gray-300 rounded-r-lg hover:bg-[#F53E32] hover:text-white hover:border-[#F53E32]"
                    onClick={() => nextPage()}
                  >
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
