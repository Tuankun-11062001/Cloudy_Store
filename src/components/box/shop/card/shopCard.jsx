import { appSvg } from "@/data/svg";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

export const ShopSliderCard = ({ data, key }) => {
  return (
    <div className="shop_slider_card" key={key}>
      <div className="info">
        <h2>{data.title}</h2>
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
      <img src={data.thumbnailBanner} loading="lazy" alt={`banner`} />
    </div>
  );
};

export const ShopCategoryDetailSliderCard = ({ data, key }) => {
  return (
    <div className="shop_category_detail_slider_card" key={data._id}>
      <div className="info">
        <h2>{data.title}</h2>
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
      <img src={data.thumbnailBanner} loading="lazy" alt={`banner`} />
    </div>
  );
};

export const ShopDetailSliderCard = ({ data, key }) => {
  return (
    <div className="shop_detail_slider_card" key={data._id}>
      <img src={data.linkImage} loading="lazy" alt={`banner`} />
    </div>
  );
};

export const ShopCategoryCard = ({ data, key }) => {
  return (
    <div className="shop_category_card" key={data._id}>
      <Link
        href={{
          pathname: `/shop/category/${data.categoryName}`,
          query: { name: data.categoryName, id: data._id },
        }}
      >
        <img src={data.categoryImage} loading="lazy" alt={`banner`} />
        <h4>{data.categoryName}</h4>
      </Link>
    </div>
  );
};

export const ShopProductCard = ({ data, key }) => {
  return (
    <div className="shop_product_card" key={data?._id}>
      <Link
        href={{
          pathname: `/shop/${data?._id}`,
          query: { name: data?.title, id: data?._id },
        }}
      >
        <img src={data?.thumbnail} loading="lazy" alt={`banner`} />
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

export const ShopPartnerCard = ({ data, key }) => {
  return (
    <div className="shop_partner_card" key={data._id}>
      <img src={data.partnerImage} loading="lazy" alt={`banner`} />
    </div>
  );
};
