"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LocalSwich = () => {
  const router = useRouter();
  const [language, setLanguage] = useState("en");
  const onActiveLanguage = (e, val) => {
    const flags = document.querySelectorAll(".language img");
    flags.forEach((flag) => flag.classList.remove("active"));
    e.target.classList.add("active");
    setLanguage(val);
    router.replace(`/${val}`);
  };

  return (
    <div className="language">
      <img src="/vietFlag.png" onClick={(e) => onActiveLanguage(e, "vn")} />
      <span>/</span>
      <img
        src="/usFlag.png"
        onClick={(e) => onActiveLanguage(e, "en")}
        className="active"
      />
    </div>
  );
};

export default LocalSwich;
