import React from "react";
import "../components/Home.css";
import Main from "../homePageParts/Main";
import Carts from "../homePageParts/Carts";
import Products from "../homePageParts/Products";
import DailyProducts from "../homePageParts/DailyProducts";
import DailyDeals from "../homePageParts/DailyDeals";
import TopSelling from "../homePageParts/TopSelling";
import PreFooter from "../homePageParts/PreFooter";
import AboutUs from "../homePageParts/AboutUs";
const Home = () => {
  return (
    <div>
      <Main />
      <Carts />
      <Products />
      <DailyProducts />
      <DailyDeals />
      <TopSelling />
      <PreFooter />
      <AboutUs />
    </div>
  );
};

export default Home;
