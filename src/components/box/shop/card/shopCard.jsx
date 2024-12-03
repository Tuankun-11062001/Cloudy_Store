import { appSvg } from "@/data/svg";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

export const ShopSliderCard = ({ data }) => {
  return (
    <div className="shop_slider_card">
      <div className="info">
        <h1>{data.title}</h1>
        <div>{data.description}</div>
        <div className="check">
          <Link
            href={{
              pathname: `/shop/${data?._id}`,
              query: { name: data?.title, id: data?._id },
            }}
          >
            <p>{data.price}</p>
          </Link>
        </div>
      </div>
      <img src={data.thumbnailBanner} />
    </div>
  );
};

export const ShopCategoryDetailSliderCard = ({ data }) => {
  return (
    <div className="shop_category_detail_slider_card">
      <div className="info">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className="check">
          <Link
            href={{
              pathname: `/shop/${data?._id}`,
              query: { name: data?.title, id: data?._id },
            }}
          >
            <p> {data.price}!</p>
          </Link>
        </div>
      </div>
      <img src={data.thumbnailBanner} />
    </div>
  );
};

export const ShopDetailSliderCard = ({ data }) => {
  return (
    <div className="shop_detail_slider_card">
      <img src={data.linkImage} />
    </div>
  );
};

export const ShopCategoryCard = ({ data }) => {
  return (
    <div className="shop_category_card">
      <Link
        href={{
          pathname: `/shop/category/${data.categoryName}`,
          query: { name: data.categoryName, id: data._id },
        }}
      >
        <img src={data.categoryImage} />
        <h4>{data.categoryName}</h4>
      </Link>
    </div>
  );
};

export const ShopProductCard = ({ data }) => {
  return (
    <div className="shop_product_card">
      <Link
        href={{
          pathname: `/shop/${data?._id}`,
          query: { name: data?.title, id: data?._id },
        }}
      >
        <img src={data?.thumbnail} />
        <div className="info">
          <h3>
            <abbr title={data?.title}>{data?.title}</abbr>
          </h3>
          <p>{data?.price}</p>
        </div>
      </Link>
    </div>
  );
};

export const ShopPartnerCard = ({ data }) => {
  return (
    <div className="shop_partner_card">
      <img src={data.partnerImage} />
    </div>
  );
};
