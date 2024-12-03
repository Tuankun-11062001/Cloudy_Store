import { appSvg } from "@/data/svg";
import React, { Suspense } from "react";
import { BookDetailCardButton } from "../button/bookButton";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

export const BookSliderCard = ({ data }) => {
  return (
    <div className="book_slider_card">
      <div className="info">
        <h1>{data.title}</h1>
        <h3>{data.author}</h3>
        <p className="des">{data.description}</p>
        <div className="other">
          <p>
            {appSvg.view} {data.view} views
          </p>
          <p>
            {appSvg.cloud} {data.cloudy.length} Cloudy
          </p>
          <p>
            {appSvg.comment} {data.comments.length} Comments
          </p>
        </div>
        <div className="check">
          <Link
            href={{
              pathname: `/book/${data?._id}`,
              query: { name: data?.title, id: data?._id },
            }}
          >
            <p>Let's Explore!</p>
          </Link>
        </div>
      </div>
      <div className="image">
        <img src={data.thumbnailBanner} alt="" />
      </div>
    </div>
  );
};

export const BookCategoryCard = ({ data }) => {
  return (
    <div className="book_category_card">
      <Link
        href={{
          pathname: `/book/category/${data.categoryName}`,
          query: { name: data.categoryName, id: data._id },
        }}
      >
        <p>{data.categoryName}</p>
      </Link>
    </div>
  );
};

export const BookCard = async ({ data }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const demo = await fetch(`${baseUrl}/chapters/${data?.chapters[0]?.chapter}`);
  const resDemo = await demo.json();
  return (
    <div className="book_card">
      <img className="book_card_image" src={data?.thumbnail} />
      <div className="info">
        <Link
          href={{
            pathname: `/book/${data?._id}`,
            query: { name: data?.title, id: data?._id },
          }}
        >
          <h1>{data?.title}</h1>
        </Link>
        <p>By {data?.author}</p>
        <p>Translate</p>
        <p className="des">{data?.description}</p>
        <div className="other">
          <p>
            {appSvg.view} {data?.view}
          </p>
          <p>
            {appSvg.cloud} {data?.cloudy.length}
          </p>
        </div>
        <div className="bottom">
          <Link
            href={{
              pathname: `/book/${data?._id}`,
              query: { name: data?.title, id: data?._id },
            }}
          >
            <p>Read now!</p>
          </Link>
          <Suspense fallback={<p>Loading...</p>}>
            <BookDetailCardButton />
          </Suspense>
        </div>
      </div>

      <div className="more_detail">
        <div className="more_detail_content">
          <div className="more_detail_content_left">
            <img src={data?.thumbnail} />
            <Suspense>
              <BookDetailCardButton closeIcon={true} />
            </Suspense>
            <div className="more_detail_content_left_info">
              <h1>{data?.title}</h1>
              <p>By {data?.author}</p>
              <p>Translate</p>
              <p className="des">{data?.description}</p>
              <div className="other">
                <p>
                  {appSvg.view} {data?.view}
                </p>
                <p>
                  {appSvg.cloud} {data?.cloudy.length}
                </p>
              </div>
              <Link
                href={{
                  pathname: `/book/${data?._id}`,
                  query: { name: data?.title, id: data?._id },
                }}
              >
                <p className="check">Read Now!</p>
              </Link>
            </div>
          </div>
          <div className="more_detail_content_right">
            <h3>Demo {data?.title}</h3>
            <div
              className="more_detail_content_right_demo tiptap"
              dangerouslySetInnerHTML={{
                __html: resDemo.data?.content || <p></p>,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BookCardHorizal = ({ data }) => {
  return (
    <div className="book_card_horizal">
      <Link
        href={{
          pathname: `/book/${data?._id}`,
          query: { name: data?.title, id: data?._id },
        }}
      >
        <img src={data.thumbnail} />
        <div className="info">
          <h3>{data.title}</h3>
          <p>{data.author}</p>
          <p>{data.release}</p>
        </div>
      </Link>
    </div>
  );
};

export const BookCategorySliderCard = ({ data }) => {
  return (
    <div className="book_category_slider_card">
      <div className="info">
        <h1>{data.title}</h1>
        <h3>{data.author}</h3>
        <p className="des">{data.description}</p>
        <div className="other">
          <p>
            {appSvg.view} {data.view} views
          </p>
          <p>
            {appSvg.cloud} {data.cloudy.length} Cloudy
          </p>
        </div>
        <div className="check">
          <Link
            href={{
              pathname: `/book/${data?._id}`,
              query: { name: data?.title, id: data?._id },
            }}
          >
            <p>Let's Explore!</p>
          </Link>
        </div>
      </div>
      <div className="image">
        <img src={data.thumbnailBanner} alt="" />
      </div>
    </div>
  );
};
