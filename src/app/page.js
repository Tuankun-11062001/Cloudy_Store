"use client";
import NavCategory from "@/components/navCategory";
import Product from "@/components/product";
import { SwiperSlideBanner } from "@/components/swiper";
import React, { useEffect, useState } from "react";
import ProductAPI from "@/restAPI/product";
import BannerFollow from "@/components/bannerFollow";
import Loading from "./loading";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await ProductAPI.getProducts();
      setProducts(response);
    })();
  }, []);
  return (
    <div>
      <SwiperSlideBanner />
      <NavCategory />
      <div className="list_product">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        {/* {products?.map((product) => (
          <Product key={product._id} data={product} />
        ))} */}
      </div>
      <BannerFollow />
    </div>
  );
};

export default Home;
