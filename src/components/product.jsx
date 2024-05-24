"use client";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const Product = ({ data, hide }) => {
  return (
    <div className={`product ${hide}`}>
      <div className="decoration">
        <img src="/summer_card_lemon.png" className="lemon" />
        <img src="/summer_card_ball.png" className="ball" />
        <img src="/summer_card_glass.png" className="glass" />
        <img src="/summer_card_melon_b.png" className="melon_big" />
        <img src="/summer_card_melon_s.png" className="melon_small" />
        <img src="/summer_card_tree_b.png" className="tree_big" />
        <img src="/summer_card_tree_s.png" className="tree_small" />
        <img src="/summer_card_tree_b.png" className="tree_big_2" />
        <img src="/summer_card_tree_b.png" className="tree_big_3" />
      </div>
      <div className="product_img">
        <img src={data?.currentImage} alt="product" />
        <p className={`partner ${data.partner.title}`}>{data.partner.title}</p>
        {data?.hotProduct ? <p className="hot">Hot</p> : ""}
      </div>
      <div className="product_info">
        <Link href={`/shop/${data._id}`}>
          <h3>{data.title}</h3>
          <div className="product_price">
            <span>{data.price}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
