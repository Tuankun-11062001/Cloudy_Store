import React from "react";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const Posts = ({ data }) => {
  return (
    <Link href={`/profile/${data._id}`}>
      <div className="post">
        <img src={data?.thumbnail} alt="image_post" />
        <div className="content_post">
          <h3>{data?.title}</h3>
          <p className="description">{data?.description}</p>
          <p>
            {new Date(data.createdAt).getDay() +
              "/" +
              new Date(data.createdAt).getMonth() +
              1}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Posts;
