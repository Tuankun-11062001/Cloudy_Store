"use client";
import React, { useState } from "react";

const SeeMoreLyricsSong = () => {
  const [seeMore, setSeeMore] = useState(false);
  const handleSemore = (e) => {
    const detail = e.target.parentElement.querySelector("p");
    console.log(detail);
    detail.classList.toggle("active");
    setSeeMore(!seeMore);
  };
  return (
    <span onClick={handleSemore}>
      {seeMore ? "Collapse description" : "See more"}
    </span>
  );
};

export default SeeMoreLyricsSong;
