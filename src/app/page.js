"use client";
import NavCategory from "@/components/navCategory";
import Product from "@/components/product";
import { SwiperSlideBanner } from "@/components/swiper";
import React, { useEffect } from "react";
import BannerFollow from "@/components/bannerFollow";
import Loading from "./loading";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync, setFilters } from "@/redux/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { products, loading, filterKey, filters } = product;

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  useEffect(() => {
    if (filterKey.toLowerCase() === "all" && products.length > 0) {
      dispatch(setFilters(products));
      return;
    } else {
      dispatch(
        setFilters(
          products.filter(
            (product) =>
              product.category.title.toLowerCase() === filterKey.toLowerCase()
          )
        )
      );
    }
  }, [filterKey]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <SwiperSlideBanner />
          <NavCategory />
          <div className="list_product">
            {filters?.map((product) => (
              <Product key={product._id} data={product} />
            ))}
          </div>
          <BannerFollow />
        </div>
      )}
    </>
  );
};

export default Home;
