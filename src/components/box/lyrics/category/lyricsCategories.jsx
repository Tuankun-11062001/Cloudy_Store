import React from "react";
import { LyricsCategoryCard } from "../card/lyricsCard";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const LyricsCategories = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  let categories = await fetch(`${baseUrl}/category?q=lyrics`, {
    next: { revalidate: 10 },
  });
  let res = await categories.json();
  return (
    <div className="lyrics_categories">
      <div className="lyrics_categories_head">
        <h2>Categories</h2>
        <Link href="/lyrics/category">See all category</Link>
      </div>
      <div className="lyrics_categories_list">
        {res.data.map((category) => (
          <LyricsCategoryCard data={category} key={category._id} />
        ))}
      </div>
    </div>
  );
};

export default LyricsCategories;
