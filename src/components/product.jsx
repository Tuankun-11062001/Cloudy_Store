"use client";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const Product = ({ data }) => {
  return (
    <div className="product">
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
