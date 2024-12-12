"use client";
import { lyricsApi } from "@/api/lyrics";
import { appSvg } from "@/data/svg";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import React, { useEffect, useState } from "react";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const Search = () => {
  const [dataSearch, setDataSearch] = useState("");
  const [lyrics, setLyrics] = useState([]);
  const handleSearch = async (e) => {
    setDataSearch(e.target.value);
    const res = await lyricsApi.searchLyrics(e.target.value);
    if (res.status === 200) {
      setLyrics(res.data.data);
    } else {
      setLyrics([]);
    }
  };

  useEffect(() => {
    const searchList = document.querySelector(".search .search_list");
    if (dataSearch) {
      searchList.classList.add("active");
    } else {
      searchList.classList.remove("active");
    }
  }, [dataSearch]);

  return (
    <div className="search">
      <div className="search_form">
        {appSvg.search}
        <input placeholder="Type your lyrics song..." onChange={handleSearch} />
      </div>
      <div className="search_list">
        {lyrics?.map((item) => (
          <div className="item" key={item._id}>
            <Link
              href={{
                pathname: `/lyrics/${item?._id}`,
                query: { name: item?.title, id: item?._id },
              }}
            >
              <img src={item.thumbnail} />
              <div className="item_content">
                <h3>{item.title}</h3>
                <p>Singer: {item.singer.singerName}</p>
                <p>Lyrics by : Cloudy melody</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
