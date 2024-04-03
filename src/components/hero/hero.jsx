import { useTranslations } from "next-intl";
import React from "react";

const HeroLeft = () => {
  const t = useTranslations("Hero");
  return (
    <div className="left">
      <div className="top">
        <p>June</p>
        <p>
          11 <span>th</span>
        </p>
        <span className="line"></span>
      </div>
      {/* title Cloudy Melody */}
      <div className="title_logo">
        <h1>Cloudy</h1>
        <h1>Melody</h1>
      </div>

      {/* detail Cloudy Melody */}

      <div className="info">
        <div>
          <p className="info_welcome">{t("info_1")}</p>
          <span></span>
        </div>

        <div>
          <p>{t("info_2")}</p>
          <span />
        </div>

        <div>
          <p>{t("info_3")}</p>
          <span />
        </div>

        <div>
          <p>
            <strong>{t("info_4")}</strong>
            {t("info_5")}
          </p>
          <span />
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
