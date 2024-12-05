import LyricsBack from "@/components/box/lyrics/button/lyricsBack";
import { SingerCard } from "@/components/box/lyrics/card/lyricsCard";

import React, { Suspense } from "react";

const Singer = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const singers = await fetch(`${baseUrl}/lyrics/singerByCountry`, {
    next: {
      revalidate: 10,
    },
  });

  const bannerSinger = await fetch(`${baseUrl}/event`, {
    next: {
      revalidate: 10,
    },
  });

  const resSingers = await singers.json();

  const { data } = await bannerSinger.json();

  return (
    <div className="lyrics_singer">
      <LyricsBack />
      <div className="lyrics_singer_banner">
        <img src={data[0]?.bannerCategorySinger} />
      </div>

      {Object?.entries(resSingers?.data).map(([country, singers]) => (
        <div className="lyrics_singer_g" key={country}>
          <h2>Top Hits {country.toUpperCase()}</h2>
          <div className="lyrics_singer_g_list">
            {singers.map((singer) => (
              <SingerCard data={singer} key={singer._id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Singer;
