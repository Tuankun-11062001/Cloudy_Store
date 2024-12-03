"use client";
import React, { useEffect, useState } from "react";
import BoxCommentSong from "./boxCommentSong";
import BoxFeedbackSong from "./boxFeedbackSong";
import BoxAddingLyricsFeedback from "./addingLyricsFeedback/boxAddingLyricsFeedback";
import { lyricsApi } from "@/api/lyrics";
import { getCookie } from "@/components/cookies/getCookie";

const BoxControlFeedback = ({ data }) => {
  const [showAddingFeedback, setShowAddingFeedback] = useState(false);
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const localId = getCookie("_CM_id");
    setUserInfo(localId);

    const plusView = async () => {
      const newData = {
        ...data,
        view: data.view + 1,
      };
      await lyricsApi.viewLyrics(newData);
    };
    plusView();
  }, []);

  const handleShowAddingFeedback = () => {
    setShowAddingFeedback(!showAddingFeedback);
  };

  return (
    <div className="box_control_feedback">
      {/* button adding language for lyrics */}
      {userInfo ? (
        <p
          className="box_control_adding_btn"
          onClick={handleShowAddingFeedback}
        >
          Adding Your Language
        </p>
      ) : (
        <p className="box_control_feedback_message">
          Login To share Your Translate
        </p>
      )}

      {showAddingFeedback && (
        <BoxAddingLyricsFeedback
          close={handleShowAddingFeedback}
          data={data}
          idUser={userInfo}
        />
      )}

      <BoxFeedbackSong data={data} />
      <BoxCommentSong data={data} />
    </div>
  );
};

export default BoxControlFeedback;
