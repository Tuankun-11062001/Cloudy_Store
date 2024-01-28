"use client";
import NavShop from "@/components/navShop";
import Product from "@/components/product";
import Image from "next/image";
import React, { useState } from "react";
import close from "../../svgs/close.svg";
import filter from "../../svgs/filter.svg";

const ShopPage = () => {
  const [closeBtnImage, setCloseBtnImage] = useState(false);
  const handleOpenMenuShop = (e) => {
    const menu = document.querySelector(".nav_shop");
    const overlay = document.querySelector(".nav_shop_overlay");
    overlay.classList.toggle("active");
    menu.classList.toggle("active");
    setCloseBtnImage(!closeBtnImage);
  };
  return (
    <div className="shop">
      <NavShop />
      <button className="nav_shop_mobile" onClick={handleOpenMenuShop}>
        <Image src={closeBtnImage ? close : filter} />
      </button>
      <div className="list_product_shop">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ShopPage;
