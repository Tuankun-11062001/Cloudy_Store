import React from "react";

export const BlogDetailVideo = ({ data }) => {
  return (
    <div className="blog_detail_video">
      <iframe
        width="560"
        height="315"
        src={data.linkYoutube.replace(
          "https://youtu.be/",
          "https://youtube.com/embed/"
        )}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};
