import LyricsBack from "@/components/box/lyrics/button/lyricsBack";
import {
  LyricsCategoryCard,
  LyricsCategoryCountryCard,
} from "@/components/box/lyrics/card/lyricsCard";
import React, { Suspense } from "react";

const LyricsCategoryPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const lyricsCategories = await fetch(`${baseUrl}/category?q=lyrics`, {
    next: {
      revalidate: 10,
    },
  });
  const resCategory = await lyricsCategories.json();

  const lyricsContry = await fetch(`${baseUrl}/lyrics/country`, {
    next: {
      revalidate: 10,
    },
  });
  const resCountry = await lyricsContry.json();

  const bannerCategory = await fetch(`${baseUrl}/event`, {
    next: {
      revalidate: 10,
    },
  });
  const { data } = await bannerCategory.json();

  return (
    <div className="lyrics_category_page">
      <div className="head">
        <Suspense>
          <LyricsBack />
        </Suspense>
      </div>

      <div className="lyrics_category_page_banner">
        <img src={data[0].bannerCategoryLyrics} loading="lazy" alt={`banner`} />
      </div>

      <div className="country">
        <h2>Country Music</h2>
        <div className="country_list">
          {resCountry.data.map((country) => (
            <LyricsCategoryCountryCard data={country} key={country._id} />
          ))}
        </div>
      </div>

      <div className="type">
        <h2>Type Music</h2>
        <div className="type_list">
          {resCategory.data.map((category) => (
            <LyricsCategoryCard data={category} key={category._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LyricsCategoryPage;
