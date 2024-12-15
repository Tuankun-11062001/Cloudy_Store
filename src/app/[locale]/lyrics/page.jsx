import BoxLyricsTrending from "@/components/box/lyrics/boxLyricsTrending";
import BoxTopSinger from "@/components/box/lyrics/boxTopSinger";
import BoxTopSong from "@/components/box/lyrics/boxTopSong";

import Search from "@/components/box/lyrics/search/search";
import React, { Suspense } from "react";
import { LyricsSlider } from "../../../components/box/lyrics/slider/lyricsSlider";
import LyricsCategories from "@/components/box/lyrics/category/lyricsCategories";

export const metadata = {
  title: "Lyrics",
  description:
    "Hot Lyrics - New Song Lyrics - Multi-language sub 🎶 Lyrics: This is where you can find the lyrics of your favorite songs. I encourage everyone not only to read the lyrics but also to share their own translations and interpretations. Music is a universal language, and I believe that exploring the meaning of each song will make the music experience even more meaningful.",
};

const LyricsPage = () => {
  return (
    <div className="lyrics_page">
      <div className="left">
        <h1>Lyrics</h1>
        <Suspense fallback={<p>Loading search...</p>}>
          <Search />
        </Suspense>
        <BoxLyricsTrending />
        <LyricsCategories />

        <BoxTopSinger />

        <BoxTopSong />
      </div>
      <div className="right_slider">
        <div className="right_slider_black_art"></div>
        <LyricsSlider />
      </div>
    </div>
  );
};

export default LyricsPage;
