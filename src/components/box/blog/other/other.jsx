"use client";

import { blogsApi } from "@/api/blogs";
import { getCookie } from "@/components/cookies/getCookie";
import { appSvg } from "@/data/svg";
import React, { useEffect, useState } from "react";

const Other = ({ data }) => {
  const [userId, setUserId] = useState();
  const [like, setLike] = useState(false);

  useEffect(() => {
    const viewData = {
      ...data,
      view: data.view + 1,
    };
    const increaseView = async () => {
      await blogsApi.viewBlogs(viewData);
    };
    increaseView();

    const localId = getCookie("_CM_id");
    setUserId(localId);
    if (!localId) {
      return;
    }
    const isLiked = data.cloudy.some((item) => item.user == localId);

    setLike(isLiked);
  }, []);

  const toggleBoxShare = (e) => {
    const boxShare = e.target
      .closest(".lyrics_song_content_left_other_g")
      .querySelector(".box_share");
    boxShare.classList.toggle("active");
  };
  const cloudy = async (e) => {
    if (!userId) {
      return;
    }

    const cloud = e.target.closest(".other").querySelector(".cloudy");
    cloud.classList.toggle("active");

    const payload = {
      id: data._id,
      userId,
    };

    const res = await blogsApi.cloudyBlogs(payload);
    if (res.status === 200) {
      setLike(!like);
    }
  };

  return (
    <div className="other">
      <p>
        {appSvg.view} {data.view} views
      </p>
      <p className={like ? "cloudy active" : "cloudy"} onClick={cloudy}>
        {appSvg.cloud} {data.cloudy.length} Cloudy
      </p>
      <p>
        {appSvg.share} {data.share} Shares
      </p>
    </div>
  );
};

export default Other;
