"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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

export const SwiperSlideBanner = () => {
  return (
    <div className="swiper_container">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
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
        modules={[EffectCreative, Autoplay, Pagination, Navigation]}
        className="mySwiper2 swiper_layout"
      >
        <SwiperSlide>
          <div className="swiper_item">
            <div className="image">
              <img src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/410760710_745678484118832_8351439430070632770_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=wMlsCxgO7ZkAX9w6gWe&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfDyWRBPzLwHv5TQlvUEbv7XoB7lyVPFQcxQ03cl7BPtuw&oe=65B383A9" />
            </div>
            <div className="content">
              <div className="partner">
                <p>Partner</p>
                <p>Printify</p>
              </div>
              <h1 className="title">T-shirt Shy With Box</h1>
              <div className="prices">
                <p>Total prices + (Ship)</p>
                <h3>120.000</h3>
              </div>
              <button>Go to partner</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_item">
            <div className="image">
              <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/412023188_745678637452150_9189147761310133703_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=AczMNwFwNRIAX9MUjpK&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDhqWiRCX95S631L4Kd08AHk6Z2KoKLsOaxf6GqQGQ0pg&oe=65B3E58D" />
            </div>
            <div className="content">
              <div className="partner">
                <p>Partner</p>
                <p>Printify</p>
              </div>
              <h1 className="title">T-shirt Confident Text</h1>
              <div className="prices">
                <p>Total prices + (Ship)</p>
                <h3>120.000</h3>
              </div>
              <button>Go to partner</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_item">
            <div className="image">
              <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/412064754_745678947452119_3381421577469423153_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=j05qxPeXec0AX_84CQR&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfClvwIA4MoQtIEvBJCPHN3fwTcqPdTtSXvSC3OnAwi3yQ&oe=65B274EC" />
            </div>
            <div className="content">
              <div className="partner">
                <p>Partner</p>
                <p>Printify</p>
              </div>
              <h1 className="title">T-shirt Shy Cartoon</h1>
              <div className="prices">
                <p>Total prices + (Ship)</p>
                <h3>120.000</h3>
              </div>
              <button>Go to partner</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export const SwiperSlideImageProduct = ({ data }) => {
  return (
    <div className="swiper_container">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
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
        modules={[EffectCreative, Pagination, Navigation]}
        className="mySwiper2 swiper_layout"
      >
        {data?.map((resImg) => (
          <SwiperSlide key={resImg._id}>
            <div className="swiper_item_product">
              <div className="image">
                <img src={resImg.colorLink} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
