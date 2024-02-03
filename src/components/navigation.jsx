"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import phone from "../svgs/phone.svg";
import search from "../svgs/search.svg";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <div className="navigation">
      <a href="tel:0826901362" type="0826901362" className="phone">
        <Image src={phone} />
        +84 8269 01362
      </a>
      <div className="midle">
        <Link href="/" className={pathName == "/" ? "active" : ""}>
          Home
        </Link>
        <Link href="/shop" className={pathName == "/shop" ? "active" : ""}>
          Store
        </Link>
        <Link href="/" className="logo">
          <div className="content"></div>
        </Link>
        <Link
          href="/profile"
          className={pathName == "/profile" ? "active" : ""}
        >
          Profile
        </Link>
        <Link
          href="/support"
          className={pathName == "/support" ? "active" : ""}
        >
          Support
        </Link>
      </div>
      <div className="search">
        <Image src={search} />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Navigation;
