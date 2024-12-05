import { appSvg } from "@/data/svg";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import React from "react";
export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const BoxLyricsTrending = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const trendings = await fetch(`${baseUrl}/lyrics?trending=true`, {
    next: {
      revalidate: 10,
    },
  });
  const res = await trendings.json();
  return (
    <div className="box_lyrics_trending">
      <div className="box_lyrics_trending_head">
        {appSvg.fire} Trending songs
      </div>
      <div className="box_lyrics_trending_list">
        {res.data.map((trending, indx) => (
          <Link
            href={{
              pathname: `lyrics/${trending._id}`,
              query: { name: trending.title, id: trending._id },
            }}
            key={trending._id}
          >
            <div className="item">
              <p className="item_no">{indx + 1}</p>
              <h4>{trending.title}</h4>
              <p className="item_singer">{trending.singer.singerName}</p>
              <span className="item_chart">
                {appSvg.chardView} {trending.view}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BoxLyricsTrending;
