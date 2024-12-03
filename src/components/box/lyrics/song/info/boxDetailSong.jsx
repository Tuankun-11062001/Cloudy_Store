import SeeMoreLyricsSong from "@/components/button/seeMoreLyricsSong";
import { appSvg } from "@/data/svg";
import React from "react";

const BoxDetailSong = ({ data }) => {
  return (
    <div className="box_detail_song">
      <div className="box_detail_song_head">
        <abbr title={data?.title}>{appSvg.lyrics}</abbr>
        <h1>Song: {data?.title}</h1>
      </div>
      <div className="box_detail_song_content">
        <p>Singer: {data?.singer?.singerName}</p>
        <p>Release: {data?.release}</p>
        <div className="box_detail_song_content_description">
          <p>{data?.description}</p>
          <SeeMoreLyricsSong />
        </div>
      </div>
    </div>
  );
};

export default BoxDetailSong;
