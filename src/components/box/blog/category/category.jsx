import { createSharedPathnamesNavigation } from "next-intl/navigation";
import React from "react";
import { BlogCategoryGridCard } from "../card/blogCategoryCard";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

export const BlogPageCategory = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const resCategory = await fetch(`${baseUrl}/category?q=blogs`, {
    next: {
      revalidate: 1,
    },
  });

  const category = await resCategory.json();

  return (
    <div className="blog_page_category">
      <div className="blog_page_category_head">
        <div className="left">
          <h2>Categories.</h2>
        </div>
        <div className="right">
          <Link href="/blog/category">See all Category</Link>
        </div>
      </div>
      <div className="blog_page_category_content">
        {category.data.slice(0, 6).map((item) => (
          <BlogCategoryGridCard data={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};
