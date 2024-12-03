"use client";
import { appSvg } from "@/data/svg";
import React, { Suspense, useEffect, useState } from "react";
import BoxFeeling from "./boxFeeling";
import { getCookie } from "@/components/cookies/getCookie";

const Feeling = () => {
  const [messagelogin, setMessageLogin] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [getting, setGetting] = useState({
    svg: null,
    good: "",
  });

  useEffect(() => {
    const localId = getCookie("_CM_id");
    const userInfo = getCookie("_CM_info");

    if (localId) {
      setMessageLogin(false);
      setUserInfo(JSON.parse(userInfo));
    } else {
      setMessageLogin(true);
      setUserInfo(null);
    }
  }, []);

  useEffect(() => {
    const time = new Date().getHours();

    if (time >= 0 && time <= 6) {
      setGetting({
        svg: appSvg.sun,
        good: "You wake up so early",
      });
    } else if (time > 6 && time <= 12) {
      setGetting({
        svg: appSvg.sun,
        good: "Morning!",
      });
    } else if (time > 12 && time <= 18) {
      setGetting({
        svg: appSvg.moon,
        good: "Good Afternoon!",
      });
    } else {
      setGetting({
        svg: appSvg.moon,
        good: "Good Evening!",
      });
    }
  }, []);

  const handleBoxFeeling = (e) => {
    const boxFeeling = e.target.parentElement.querySelector(".box_feeling");
    console.log(boxFeeling);
    boxFeeling.classList.add("active");
  };

  return (
    <div>
      {messagelogin ? (
        <div className="feeling_guest">
          <h3>Hi Guest!</h3>
          <p>How do you feeling? Can You Share your feeling?</p>
          <p>Login to Share Your feeling!</p>
        </div>
      ) : (
        <div className="feeling" onClick={handleBoxFeeling}>
          <img src={userInfo.avatar} />
          <div className="feeling_content">
            <div className="good">
              {getting.svg}
              <p>{getting.good}</p>
              <p>{userInfo.userName}</p>
            </div>
            <p>How do you feel ? Can you share your feeling?</p>
          </div>
        </div>
      )}
      <BoxFeeling close={handleBoxFeeling} />
    </div>
  );
};

export default Feeling;
