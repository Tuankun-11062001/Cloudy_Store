import React from "react";
import { ShopProductCard } from "../card/shopCard";

export const ShopSeason = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const resTrending = await fetch(`${baseUrl}/shop?trending=true`, {
    next: {
      revalidate: 1,
    },
  });

  const trending = await resTrending.json();

  return (
    <div className="shop_season">
      <h2>Top for Season</h2>
      <div className="shop_season_list">
        {trending.data.map((product) => (
          <ShopProductCard data={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};
