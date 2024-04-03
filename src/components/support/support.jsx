import React from "react";
import TitleApp from "../title";
import SupportForm from "./supportForm";
import { useTranslations } from "next-intl";

const Support = () => {
  const t = useTranslations("Support");

  return (
    <div className="home_support">
      <TitleApp title={t("title")} />
      <p className="description">{t("description")}</p>
      <SupportForm />
    </div>
  );
};

export default Support;
