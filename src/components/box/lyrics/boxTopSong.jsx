import { LyricsCard } from "@/components/box/lyrics/card/lyricsCard";
import React from "react";

const BoxTopSong = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const res = await fetch(`${baseUrl}/lyrics/topSong`, {
    next: {
      revalidate: 1,
    },
  });

  const topSongs = await res.json();
  return (
    <div className="box_top_song">
      <div className="box_top_song_head">
        <h3>Top song of week</h3>
      </div>
      <div className="box_top_song_list">
        {topSongs?.data?.map((top) => (
          <LyricsCard data={top} key={top._id} />
        ))}
      </div>
    </div>
  );
};

export default BoxTopSong;
