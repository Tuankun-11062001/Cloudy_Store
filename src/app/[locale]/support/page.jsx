"use client";
import SupportForm from "@/components/support/supportForm";
import { useTranslations } from "next-intl";
import React from "react";

const SupportPage = () => {
  const t = useTranslations("Support");
  const handleCloudyInfo = () => {
    const leftContent = document.querySelector(".support .content .left");
    const rightContent = document.querySelector(".support .content .right");
    leftContent.classList.toggle("active");
    rightContent.classList.toggle("active");
  };

  return (
    <div className="support">
      <img className="background" src="/summer_support.jpg" alt="" />
      <div className="content">
        {/* button show message cloudy thank you for mobile device */}
        <div className="btn_cloudy" onClick={handleCloudyInfo}>
          <img className="cloudy_small" src="/cloudy.svg" />
        </div>

        <div className="left active">
          <h3>{t("title")}</h3>
          <p>{t("title_small")}</p>
          <SupportForm />
        </div>

        <div className="right">
          <img className="cloudy" src="/cloudy.svg" />
          <p>{t("cloudy_info")}</p>

          <p className="follow">{t("cloudy_follow")}</p>
          <ul>
            <a
              href="https://www.facebook.com/profile.php?id=61553832912429"
              target="_blank"
            >
              <img src="/faceIcon.svg" />
            </a>
            <a href="https://www.instagram.com/junenguyen11" target="_blank">
              <img src="/instagramIcon.svg" />
            </a>
            <a
              href="https://www.youtube.com/@cloudymelody11_06"
              target="_blank"
            >
              <img src="/youtubeIcon.svg" />
            </a>
            <a href="https://www.tiktok.com/@junetshirt" target="_blank">
              <img src="/tiktokIcon.svg" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
