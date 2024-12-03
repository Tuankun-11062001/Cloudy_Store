import { appSvg } from "@/data/svg";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import Head from "next/head";
import React from "react";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

export const LyricsCard = ({ data, key }) => {
  return (
    <div className="lyrics_card" key={key}>
      <Link
        href={{
          pathname: `/lyrics/${data?._id}`,
          query: { name: data?.title, id: data?._id },
        }}
      >
        <img src={data?.thumbnail} />

        <div className="lyrics_card_content">
          <h3>{data?.title}</h3>
          <p>Singer: {data?.singer?.singerName}</p>
          <p>Release: {data?.release}</p>
        </div>
      </Link>
    </div>
  );
};

export const LyricsSliderCard = ({ data, key }) => {
  return (
    <div className="lyrics_slider_card" key={key}>
      <img src={data.thumbnailBanner} />
      <div className="info">
        <div className="info_head">
          <span>{data.category.categoryName}</span>
          <span>Trending</span>
          <span>{data.release}</span>
        </div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <Link
          href={{
            pathname: `lyrics/${data._id}`,
            query: { name: data.title, id: data._id },
          }}
          className="check"
        >
          Check it now!
        </Link>
      </div>
    </div>
  );
};

export const LyricsSingerSliderCard = ({ data, key }) => {
  return (
    <div className="lyrics_singer_slider_card" key={key}>
      <Link
        href={{
          pathname: `/lyrics/${data._id}`,
          query: { name: data.title, id: data._id },
        }}
      >
        <img src={data?.thumbnailBanner} />
      </Link>
    </div>
  );
};

export const SingerCard = ({ data, key }) => {
  return (
    <div className="singer_card" key={key}>
      <Link
        href={{
          pathname: `/lyrics/singer/${data.singerName}`,
          query: { name: data.singerName, id: data._id },
        }}
      >
        <img src={data?.singerImage} />
        <p>{data?.singerName}</p>
      </Link>
    </div>
  );
};

export const LyricsSingerCardHorizal = ({ data, key }) => {
  return (
    <div className="lyrics_singer_card_horizal" key={key}>
      <Link
        href={{
          pathname: `/lyrics/singer/${data.singerName}`,
          query: { name: data.singerName, id: data._id },
        }}
      >
        <img src={data.singerImage} alt="" />
        <p>{data.singerName}</p>
      </Link>
    </div>
  );
};

export const LyricsCategoryCard = ({ data, key }) => {
  return (
    <div className="lyrics_category_card" key={key}>
      <Link
        href={{
          pathname: `/lyrics/category/${data.categoryName}`,
          query: { id: data._id, name: data.categoryName },
        }}
      >
        <img src={data.categoryImage} />
        <p>{data.categoryName}</p>
      </Link>
    </div>
  );
};

export const LyricsCategoryCountryCard = ({ data, key }) => {
  return (
    <div className="lyrics_category_country_card" key={key}>
      <Link
        href={{
          pathname: `/lyrics/category/country/${data.countryName}`,
          query: { name: data.countryName, id: data._id },
        }}
      >
        <img src={data.countryImage} />
        <p>{data.countryName}</p>
      </Link>
    </div>
  );
};

export const LyricsDetailCategorySliderCard = ({ data, key }) => {
  return (
    <div className="lyrics_detail_category_slider_card" key={key}>
      <Link
        href={{
          pathname: `/lyrics/${data._id}`,
          query: { name: data.title, id: data._id },
        }}
      >
        <img src={data.thumbnailBanner} />
      </Link>
    </div>
  );
};

export const LyricsDetailCategoryCountrySliderCard = ({ data, key }) => {
  return (
    <div className="lyrics_detail_category_country_slider_card" key={key}>
      <Link
        href={{
          pathname: `/lyrics/${data._id}`,
          query: { name: data.title, id: data._id },
        }}
      >
        <img src={data.thumbnailBanner} />
      </Link>
    </div>
  );
};
