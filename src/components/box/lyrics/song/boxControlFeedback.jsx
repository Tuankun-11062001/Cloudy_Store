"use client";
import React, { useEffect, useState } from "react";
import BoxCommentSong from "./boxCommentSong";
import BoxFeedbackSong from "./boxFeedbackSong";
import BoxAddingLyricsFeedback from "./addingLyricsFeedback/boxAddingLyricsFeedback";
import { getLocalStorage } from "@/components/storage/local";

const BoxControlFeedback = ({ data }) => {
  const [showAddingFeedback, setShowAddingFeedback] = useState(false);
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const localId = getLocalStorage("_CM_id");
    setUserInfo(localId);
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
