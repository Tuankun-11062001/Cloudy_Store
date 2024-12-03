"use client";
import React, { useEffect, useState } from "react";
import HeaderMember from "../button/headerMember";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { userApi } from "@/api/user";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const Members = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = async () => {
      const res = await userApi.newLatestUser();
      setUsers(res.data.data);
    };
    users();
  }, []);

  return (
    <div className="member">
      <div className="head">
        <p>Members Cloudy</p>
        <Link href="/user">All user</Link>
      </div>
      <div className="list_member">
        {users.map((user) => (
          <abbr title={user.userName}>
            <img src={user.avatar} key={user._id} />
          </abbr>
        ))}
      </div>
      <HeaderMember />
    </div>
  );
};

export default Members;
