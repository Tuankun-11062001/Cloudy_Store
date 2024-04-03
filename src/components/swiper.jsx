"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  EffectCreative,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import Product from "./product";

export const SwiperSlideHero = ({ children }) => {
  const t = useTranslations("Hero");
  return (
    <div className="swiper_container">
      <Swiper
        // slidesPerView={"auto"}
        spaceBetween={30}
        // grabCursor={true}
        // effect={"creative"}
        // // navigation={true}
        // creativeEffect={{
        //   prev: {
        //     shadow: true,
        //     translate: ["-120%", 0, -500],
        //   },
        //   next: {
        //     shadow: true,
        //     translate: ["120%", 0, -500],
        //   },
        // }}
        // modules={[EffectCreative, Autoplay, Pagination, Navigation]}
        className="mySwiper2 swiper_layout"
      >
        {children}
      </Swiper>
    </div>
  );
};

export const SwiperProduct = ({ data }) => {
  return (
    <div className="swiper_container">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          380: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper2 swiper_layout"
      >
        {data?.data?.map((product) => (
          <SwiperSlide key={product._id}>
            <Product data={product} key={product._id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const SwiperSlideImage = ({ data, type }) => {
  return (
    <div className="swiper_container">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[EffectCreative, Pagination, Navigation, Autoplay]}
        className="mySwiper2 swiper_layout"
      >
        {type === "blog" ? (
          <>
            {data?.data?.map((blog) => (
              <SwiperSlide key={blog._id}>
                <Link href={`/profile/${blog._id}`}>
                  <div className="slide">
                    <img src={blog.thumbnail} />
                    <div className="content">
                      <div className="feature">
                        <p>Feature</p>
                        <span />
                        <p>
                          {`${new Date(blog.createdAt).getDay()}
                          /
                          ${new Date(blog.createdAt).getMonth() + 1} 
                          
                          / 
                          ${new Date(blog.createdAt).getFullYear()}`}
                        </p>
                      </div>
                      <h1>{blog.title}</h1>
                      <p className="des">{blog.description}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </>
        ) : (
          <>
            {data?.map((resImg) => (
              <SwiperSlide key={resImg._id}>
                <div className="swiper_item_product">
                  <div className="image">
                    <img src={resImg.colorLink} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
};
