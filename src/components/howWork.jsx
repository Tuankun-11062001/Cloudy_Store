import React from "react";
import TitleApp from "./title";
import { useTranslations } from "use-intl";
import { SwiperSlideHero } from "./swiper";
import { SwiperSlide } from "swiper/react";

const HowWork = () => {
  const t = useTranslations("Working");

  return (
    <div className="home_working">
      <TitleApp title={t("title")} />
      <p className="description">{t("description")}</p>
      <p className="thank">{t("thank")}</p>
      <div className="process">
        <div className="item">
          <span className="dot" />
          <h3 className="title">{t("item_1_title")}</h3>
          <p>{t("item_1_description")}</p>
          <img src="/process1.png" />
        </div>
        <div className="item">
          <span className="dot" />
          <h3 className="title">{t("item_2_title")}</h3>
          <p>{t("item_2_description")}</p>
          <img src="/process2.png" />
        </div>
        <div className="item">
          <span className="dot" />
          <h3 className="title">{t("item_3_title")}</h3>
          <p>{t("item_3_description")}</p>
          <img src="/process3.png" />
        </div>
        <div className="item">
          <span className="dot" />
          <h3 className="title">{t("item_4_title")}</h3>
          <p>{t("item_4_description")}</p>
          <img src="/process4.png" />
        </div>
        <div className="item">
          <span className="dot" />
          <h3 className="title">{t("item_5_title")}</h3>
          <p>{t("item_5_description")}</p>
          <img src="/process5.png" />
        </div>
      </div>
      <div className="process_mobile">
        <SwiperSlideHero>
          <SwiperSlide>
            <div className="process_mobile item">
              <p className="step">1</p>
              <span className="dot" />
              <h3 className="title">{t("item_1_title")}</h3>
              <p>{t("item_1_description")}</p>
              <img src="/process1.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="process_mobile item">
              <p className="step">2</p>
              <span className="dot" />
              <h3 className="title">{t("item_2_title")}</h3>
              <p>{t("item_2_description")}</p>
              <img src="/process2.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="process_mobile item">
              <p className="step">3</p>
              <span className="dot" />
              <h3 className="title">{t("item_3_title")}</h3>
              <p>{t("item_3_description")}</p>
              <img src="/process3.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="process_mobile item">
              <p className="step">4</p>
              <span className="dot" />
              <h3 className="title">{t("item_4_title")}</h3>
              <p>{t("item_4_description")}</p>
              <img src="/process4.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="process_mobile item">
              <p className="step">5</p>
              <span className="dot" />
              <h3 className="title">{t("item_5_title")}</h3>
              <p>{t("item_5_description")}</p>
              <img src="/process5.png" />
            </div>
          </SwiperSlide>
        </SwiperSlideHero>
      </div>
    </div>
  );
};

export default HowWork;
