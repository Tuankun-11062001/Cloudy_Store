import BoxDetailSong from "@/components/box/lyrics/song/info/boxDetailSong";

import BoxListFeedbackSong from "@/components/box/lyrics/song/boxListFeedbackSong";
import BoxVideoSong from "@/components/box/lyrics/song/info/boxVideoSong";
import React, { Suspense } from "react";
import BoxControlFeedback from "@/components/box/lyrics/song/boxControlFeedback";
import BoxLyricsSong from "@/components/box/lyrics/song/boxLyricsSong";
import BoxOther from "@/components/box/lyrics/song/info/boxOther";
import { appSvg } from "@/data/svg";
import LyricsBack from "@/components/box/lyrics/button/lyricsBack";

export async function generateMetadata({ params, searchParams }) {
  const { id } = params; // lấy id từ query param

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  const resProduct = await fetch(`${serverUrl}/lyrics/${id}`, {
    next: {
      revalidate: 1,
    },
  });

  const { data } = await resProduct.json();

  return {
    title: `${data.title} | Lyrics Song New Song Hits Song`,
    description: data.description,
    keywords: `${data.title}, ${data.category.name}, Lyrics Song New Song Hits Song`,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.thumbnail[0]],
      url: `${baseUrl}/lyrics/${id}`,
      type: "website",
    },
    twitter: {
      title: data.title,
      description: data.description,
      image: data.thumbnail[0],
      card: "summary_large_image",
    },
    icons: {
      icon: appSvg.favicon,
    },
  };
}

const LyricsSong = async ({ params, searchParams }) => {
  const { id } = params;
  const { name } = searchParams;
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  const lyricsSong = await fetch(`${baseUrl}/lyrics/${id}`, {
    next: {
      revalidate: 1,
    },
  });

  const resLyricsSong = await lyricsSong.json();
  const { data } = resLyricsSong;

  return (
    <div className="lyrics_song">
      <Suspense fallback={<p>Loading...</p>}>
        <LyricsBack />
      </Suspense>
      <div className="lyrics_song_content">
        <div className="lyrics_song_content_left">
          <BoxDetailSong data={data} />
          <BoxVideoSong data={data} />
          <BoxOther data={data} />
        </div>
        <div className="lyrics_song_content_middle">
          <BoxLyricsSong data={data} />
        </div>

        <div className="lyrics_song_content_right">
          <div className="box_feedback_control">
            <div className="box_feedback">
              <BoxListFeedbackSong data={data.translate} />
            </div>
            <Suspense fallback={<p>Loading..</p>}>
              <BoxControlFeedback data={data} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LyricsSong;
