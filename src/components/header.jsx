"use client";
import React, { useEffect, useState } from "react";
import LocalSwich from "./localSwich";
import { useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(0);
  const t = useTranslations("Navigation");
  const path = usePathname();

  const handleToggleNav = () => {
    const nav = document.querySelector(".header .nav");
    nav.classList.toggle("active");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > scrollHeader) {
        // Scroll down
        document.querySelector(".header").classList.add("hidden");
        document.querySelector(".header").style.background = "#fff";
        setScrollHeader(currentScroll);
        if (currentScroll < 100) {
          document.querySelector(".header").classList.remove("hidden");
          document.querySelector(".header").style.background = "#fff";
        }
      } else {
        // Scroll up
        document.querySelector(".header").classList.remove("hidden");
        document.querySelector(".header").style.background = "#fff";

        if (scrollHeader < 50) {
          document.querySelector(".header").style.background = "transparent";
        }
        setScrollHeader(currentScroll);
      }
    });
  }, [scrollHeader]);
  return (
    <div className="header">
      <div className="header_content">
        <div className="left">
          <Link href="/">
            <div className="logo">
              <img src="/logo.png" />
            </div>
          </Link>

          <button onClick={handleToggleNav} className="button_nav">
            <img src="/icon_menu.svg" />
          </button>
          <div className="nav">
            <button onClick={handleToggleNav} className="button_nav">
              <img src="/icon_close.svg" />
            </button>

            <Link href="/" className={path == "/" ? "active" : ""}>
              {t("home")}
            </Link>
            <Link href="/shop" className={path == "/shop" ? "active" : ""}>
              {t("store")}
            </Link>
            <Link
              href="/profile"
              className={path == "/profile" ? "active" : ""}
            >
              {t("profile")}
            </Link>
            <Link
              href="/support"
              className={path == "/support" ? "active" : ""}
            >
              {t("support")}
            </Link>
          </div>
        </div>
        <div className="right">
          <img src="/search.svg" />
          <LocalSwich />
          <a href="https://facebook.com" target="_blank">
            <img src="/faceIcon.svg" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img src="/instagramIcon.svg" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img src="/youtubeIcon.svg" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img src="/tiktokIcon.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
