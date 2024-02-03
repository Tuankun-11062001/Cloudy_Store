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
        <img src={product?.currentImage} alt="product" />
        <p className="partner">{product.partner.title}</p>
      </div>
      <div className="product_info">
        <Link href={`/shop/${product?._id}`}>
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
