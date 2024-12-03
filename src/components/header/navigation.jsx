"use client";
import { appSvg } from "@/data/svg";
import { useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import React from "react";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const Navigation = () => {
  const t = useTranslations("Navigation");
  const path = usePathname();

  return (
    <div className="nav">
      <div className="nav_item">
        <Link href="/" className={path == "/" ? "active" : ""}>
          <div className="border_round_top"></div>
          <div className="border_round_bottom"></div>
          {appSvg.home}
          <p>{t("home")}</p>
        </Link>
      </div>
      <div className="nav_item">
        <Link
          href="/lyrics"
          className={path.startsWith("/lyrics") ? "active" : ""}
        >
          <div className="border_round_top"></div>
          <div className="border_round_bottom"></div>
          {appSvg.lyrics}
          <p>{t("lyrics")}</p>
        </Link>
      </div>

      <div className="nav_item">
        <Link href="/blog" className={path.startsWith("/blog") ? "active" : ""}>
          <div className="border_round_top"></div>
          <div className="border_round_bottom"></div>
          {appSvg.blog}
          <p>{t("blogs")}</p>
        </Link>
      </div>

      <div className="nav_item">
        <Link href="/book" className={path.startsWith("/book") ? "active" : ""}>
          <div className="border_round_top"></div>
          <div className="border_round_bottom"></div>
          {appSvg.book}
          <p>{t("book")}</p>
        </Link>
      </div>
      <div className="nav_item">
        <Link href="/shop" className={path.startsWith("/shop") ? "active" : ""}>
          <div className="border_round_top"></div>
          <div className="border_round_bottom"></div>
          {appSvg.store}
          <p>{t("store")}</p>
        </Link>
      </div>

      <div className="nav_item">
        <Link
          href="/profile"
          className={path.startsWith("/profile") ? "active" : ""}
        >
          <div className="border_round_top"></div>
          <div className="border_round_bottom"></div>
          {appSvg.profile}
          <p>{t("profile")}</p>
        </Link>
      </div>

      <div className="nav_item">
        <Link
          href="/support"
          className={path.startsWith("/support") ? "active" : ""}
        >
          <div className="border_round_top"></div>
          <div className="border_round_bottom"></div>
          {appSvg.support}
          <p>{t("support")}</p>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
