import React from "react";
import TitleApp from "./title";
import { useTranslations } from "next-intl";

const Partner = () => {
  const t = useTranslations("Partner");

  return (
    <div className="home_partner">
      <div className="cover" />
      <TitleApp title={t("title")} />
      <div className="partner_content">
        <p>{t("partner_content_1")}</p>
        <p>{t("partner_content_2")}</p>
        <p>{t("partner_content_3")}</p>
      </div>
      <div className="partner_image">
        <img src="/printub.png" />
        <img src="/printify.png" />
        <img src="/redbubble.png" />
        <img src="/shopee.png" />
        <img src="/tiktok-shop.png" />
        <img src="/amazon.png" />
      </div>
    </div>
  );
};

export default Partner;
