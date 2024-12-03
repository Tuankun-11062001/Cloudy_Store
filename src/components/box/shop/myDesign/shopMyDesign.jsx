import React from "react";
import { ShopProductCard } from "../card/shopCard";

export const ShopMyDesign = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const resMyProduct = await fetch(`${baseUrl}/shop?myProduct=true`, {
    next: {
      revalidate: 1,
    },
  });
  const myproducts = await resMyProduct.json();

  return (
    <div className="shop_mydesign">
      <h2>Top my products</h2>
      <div className="shop_mydesign_list">
        {myproducts?.data.map((product) => (
          <ShopProductCard data={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};
