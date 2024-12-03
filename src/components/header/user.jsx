"use client";
import { appSvg } from "@/data/svg";
import React, { useEffect, useState } from "react";
import Auth from "../auth/auth";
import { getUserId } from "@/api/auth";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { deleteCookie, getCookie } from "../cookies/getCookie";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const User = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(false);
  const [infoUser, setInfoUser] = useState(null);

  useEffect(() => {
    const idLocal = getCookie("_CM_id");

    if (!idLocal) {
      setUser(false);
      return; // Không thực hiện gì thêm nếu không có cookie
    }
    if (idLocal) {
      (async () => {
        try {
          const res = await getUserId(idLocal);
          if (res.status !== 200) {
            deleteCookie("_CM_id");
          }
          setInfoUser(res.data.data);
        } catch (error) {
          console.log(error);
        }
      })();
      setUser(true);
    }
  }, [user]);

  const toggleSubMenu = (e) => {
    const sub = e.target.parentElement.querySelector(".sub_menu");
    sub.classList.toggle("active");
  };

  const openAuth = () => {
    setShowAuth(!showAuth);
  };

  const handleExit = () => {
    deleteCookie("_CM_id");
    deleteCookie("_CM_info");
    setUser(false);
    // Tải lại trang hiện tại
    window.location.reload();
  };

  return (
    <div className="header_user">
      <div className="content_mb">
        {user ? (
          <div className="user">
            <div className="left">
              <Link
                href={{
                  pathname: `/user/${infoUser?.userName}`,
                  query: { id: infoUser?._id },
                }}
              >
                <img src={infoUser?.avatar} />
              </Link>
              <p className="exit" onClick={handleExit}>
                {appSvg.exit}
              </p>
            </div>
          </div>
        ) : (
          <p className="header_login" onClick={openAuth}>
            {appSvg.user}
          </p>
        )}

        {showAuth && (
          <Auth stateLogin={showAuth} funcUser={setUser} closeFunc={openAuth} />
        )}
      </div>
      <div className="content_xl">
        {user ? (
          <div className="user">
            <div className="left">
              <img src={infoUser?.avatar} />
              <div className="info">
                <h3>{infoUser?.userName}</h3>
                <p>{infoUser?.admin ? "Admin" : "Member"}</p>
              </div>
            </div>
            <p className="motify" onClick={toggleSubMenu}>
              {appSvg.elips}
            </p>
            <div className="sub_menu">
              <Link
                href={{
                  pathname: `/user/${infoUser?.userName}`,
                  query: { id: infoUser?._id },
                }}
              >
                {appSvg.user}
                <p>Infomation User</p>
              </Link>
              <p className="exit" onClick={handleExit}>
                {appSvg.exit} Exit
              </p>
            </div>
          </div>
        ) : (
          <p className="header_login" onClick={openAuth}>
            login
          </p>
        )}

        {showAuth && (
          <Auth stateLogin={showAuth} funcUser={setUser} closeFunc={openAuth} />
        )}
      </div>
    </div>
  );
};

export default User;
