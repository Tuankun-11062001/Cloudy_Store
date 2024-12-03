"use client";

import { shopApi } from "@/api/shop";
import { getCookie } from "@/components/cookies/getCookie";
import { appSvg } from "@/data/svg";
import React, { useEffect, useState } from "react";

const DetailControl = ({ data }) => {
  const [userId, setUserId] = useState();
  const [like, setLike] = useState(false);

  useEffect(() => {
    const viewData = {
      ...data,
      view: data.view + 1,
    };
    const increaseView = async () => {
      await shopApi.viewProduct(viewData);
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

  const cloudy = async (e) => {
    if (!userId) {
      return;
    }

    const cloud = e.target
      .closest(".shop_detail_content_view")
      .querySelector(".cloudy");
    cloud.classList.toggle("active");

    const payload = {
      data: data._id,
      userId,
    };

    const res = await shopApi.cloudyProduct(payload);
    if (res.status === 200) {
      setLike(!like);
    }
  };

  return (
    <div className="shop_detail_content_view">
      <p>
        {appSvg.view} {data.view}
      </p>
      <p className={like ? "cloudy active" : "cloudy"} onClick={cloudy}>
        {appSvg.cloud} {data.cloudy.length}
      </p>
      <p>save</p>
    </div>
  );
};

export default DetailControl;
