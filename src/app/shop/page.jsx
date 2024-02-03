"use client";
import Empty from "@/components/empty";
import NavShop from "@/components/navShop";
import Product from "@/components/product";
import ProductAPI from "@/restAPI/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import close from "../../svgs/close.svg";
import filter from "../../svgs/filter.svg";
import Loading from "../loading";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync, setFilters } from "@/redux/slices/productSlice";
const ShopPage = () => {
  const dispatch = useDispatch();
  const [closeBtnImage, setCloseBtnImage] = useState(false);
  const { products, filters, filterKey, loading } = useSelector(
    (state) => state.product
  );

  console.log(products);

  useEffect(() => {
    if (products.length < 1) {
      dispatch(getProductsAsync());
    }
  }, []);

  useEffect(() => {
    if (filterKey.toLowerCase() === "all" && products.length > 0) {
      dispatch(setFilters(products));
      return;
    } else {
      dispatch(
        setFilters(
          products?.filter(
            (product) =>
              product.category.title.toLowerCase() ===
                filterKey.toLowerCase() ||
              product.partner.title.toLowerCase() === filterKey.toLowerCase()
          )
        )
      );
    }
  }, [filterKey]);

  const handleOpenMenuShop = (e) => {
    const menu = document.querySelector(".nav_shop");
    const overlay = document.querySelector(".nav_shop_overlay");
    overlay.classList.toggle("active");
    menu.classList.toggle("active");
    setCloseBtnImage(!closeBtnImage);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="shop">
          <NavShop />
          <button className="nav_shop_mobile" onClick={handleOpenMenuShop}>
            <Image src={closeBtnImage ? close : filter} />
          </button>
          {filters?.length < 1 ? (
            <Empty />
          ) : (
            <div className="list_product_shop">
              {filters?.map((product) => (
                <Product key={product._id} data={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShopPage;
