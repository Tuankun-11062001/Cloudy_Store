import BoxLyricsTrending from "@/components/box/lyrics/boxLyricsTrending";
import BoxTopSinger from "@/components/box/lyrics/boxTopSinger";
import BoxTopSong from "@/components/box/lyrics/boxTopSong";

import Search from "@/components/box/lyrics/search/search";
import React, { Suspense } from "react";
import { LyricsSlider } from "../../../components/box/lyrics/slider/lyricsSlider";
import LyricsCategories from "@/components/box/lyrics/category/lyricsCategories";

export const metadata = {
  title: "Lyrics - Cloudy Melody",
  description:
    "Hot Lyrics - New Song Lyrics - Multi language sub 🎶 Lyrics: Đây là nơi lưu giữ những lời bài hát yêu thích của bạn. Tôi muốn khuyến khích mọi người không chỉ đọc lời bài hát mà còn chia sẻ bản dịch và cách hiểu của riêng mình. Âm nhạc là ngôn ngữ chung của nhân loại, và tôi tin rằng việc khám phá ý nghĩa của từng bài hát sẽ làm cho trải nghiệm nghe nhạc trở nên sâu sắc hơn.",
};

const LyricsPage = () => {
  return (
    <div className="lyrics_page">
      <div className="left">
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
