import { createSharedPathnamesNavigation } from "next-intl/navigation";
import React from "react";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

export const BlogCategoryGridCard = ({ data, key }) => {
  return (
    <div className="blog_category_grid_card" key={key}>
      <img src={data.categoryImage} alt="" />
      <div className="info">
        <span>{data.categoryName}</span>
        <h3>{data.categoryName}</h3>
        <Link
          href={{
            pathname: `blog/category/${data.categoryName}`,
            query: { name: data.categoryName, id: data._id },
          }}
        >
          <p>Discovery {data.categoryName}</p>
        </Link>
      </div>
    </div>
  );
};

export const BlogCategoryCard = ({ data, key }) => {
  return (
    <div className="blog_category_card" key={key}>
      <Link
        href={{
          pathname: `/blog/category/${data.categoryName}`,
          query: { name: data.categoryName, id: data._id },
        }}
      >
        <img src={data.categoryImage} alt="" />
        <span>{data.categoryName}</span>
      </Link>
    </div>
  );
};
