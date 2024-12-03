"use client";
import React from "react";

const HeaderMember = () => {
  const toMember = () => {
    console.log("click");
  };
  return (
    <p className="member_button" onClick={toMember}>
      To become Cloudy member
    </p>
  );
};

export default HeaderMember;
