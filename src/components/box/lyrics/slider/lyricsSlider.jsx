import React, { Suspense } from "react";
import Head from "next/head";
import {
  LyricsDetailCategoryCountrySliderCard,
  LyricsDetailCategorySliderCard,
  LyricsSingerSliderCard,
  LyricsSliderCard,
} from "../card/lyricsCard";
import {
  LyricsDetailCategoryCountrySliderControl,
  LyricsDetailCategorySliderControl,
  LyricsSingerSliderControl,
  LyricsSliderControl,
} from "./lyricsSliderControl";

export const LyricsSlider = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const lyricsSlider = await fetch(`${baseUrl}/lyrics?slider=true`, {
    next: {
      revalidate: 10,
    },
  });
  const res = await lyricsSlider.json();
  return (
    <>
      <Head>
        <title>Top Hit Music</title>
        <meta name="Top Hits Music" content="Top hit music in the World" />
      </Head>
      <div className="lyrics_slider">
        <Suspense>
          <LyricsSliderControl data={res?.data} />
        </Suspense>

        <div className="lyrics_slider_items">
          {res?.data?.map((item) => (
            <LyricsSliderCard data={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export const LyricsDetailCategorySlider = ({ data }) => {
  return (
    <div className="lyrics_detail_category_slider">
      <Suspense>
        <LyricsDetailCategorySliderControl data={data} />
      </Suspense>

      <div className="lyrics_detail_category_slider_items">
        {data?.map((song) => (
          <LyricsDetailCategorySliderCard data={song} key={song._id} />
        ))}
      </div>
    </div>
  );
};

export const LyricsDetailCategoryCountrySlider = ({ data }) => {
  return (
    <div className="lyrics_detail_category_country_slider">
      <Suspense>
        <LyricsDetailCategoryCountrySliderControl data={data} />
      </Suspense>

      <div className="lyrics_detail_category_country_slider_items">
        {data.map((song) => (
          <LyricsDetailCategoryCountrySliderCard data={song} key={song._id} />
        ))}
      </div>
    </div>
  );
};

export const LyricsSingerSlider = ({ data }) => {
  return (
    <div className="lyrics_singer_slider">
      <Suspense>
        <LyricsSingerSliderControl data={data} />
      </Suspense>

      <div className="lyrics_singer_slider_items">
        {data.map((lyric) => (
          <LyricsSingerSliderCard data={lyric} key={lyric._id} />
        ))}
      </div>
    </div>
  );
};
