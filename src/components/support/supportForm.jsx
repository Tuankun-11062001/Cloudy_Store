"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const SupportForm = () => {
  const t = useTranslations("Support");
  return (
    <div className="support_form">
      <input placeholder={t("support_form_name")} />
      <input placeholder={t("support_form_email")} />
      <textarea placeholder={t("support_form_problem")} />
      <button>{t("support_form_submit")}</button>
    </div>
  );
};

export default SupportForm;
