"use client";
import Link from "next/link";
import React, { useState } from "react";

const Product = ({ data }) => {
  const [product, setProduct] = useState(data);
  const [i, setI] = useState(0);

  const changeImage = (e) => {
    if (i < product?.image.length - 1) {
      setI((prev) => prev + 1);
    } else {
      setI(0);
    }
    setProduct({
      ...product,
      currentImage: product.image[i].colorLink,
    });
  };

  return (
    <div className="product">
      <div className="product_img" onClick={changeImage}>
        <img
          src={
            product?.currentImage ||
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/410760710_745678484118832_8351439430070632770_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=wMlsCxgO7ZkAX9w6gWe&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfDyWRBPzLwHv5TQlvUEbv7XoB7lyVPFQcxQ03cl7BPtuw&oe=65B383A9"
          }
          alt="product"
        />
      </div>
      <div className="product_info">
        <Link href="/shop/id_product">
          <h3>{product?.title || "title"}</h3>
          <div className="product_price">
            <span>{product?.price || "prices"}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
