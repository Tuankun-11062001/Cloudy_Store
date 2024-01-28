import React from "react";
import facebook from "../svgs/facebook.svg";
import youtube from "../svgs/youtube.svg";
import instagram from "../svgs/instagram.svg";
import tiktok from "../svgs/tiktok.svg";
import Image from "next/image";

const BannerFollow = () => {
  return (
    <div className="banner_follow">
      <p>
        Cảm ơn bạn đã ghé thăm trang web của chúng tôi! Tại đây, chúng tôi tận
        tâm tạo ra những mẫu áo độc đáo và chất lượng. Hãy cùng chúng tôi khám
        phá thế giới thời trang đẳng cấp!
      </p>
      <div>
        <a href="https://facebook.com">
          <Image src={facebook} />
        </a>
        <a href="https://youtube.com">
          <Image src={youtube} />
        </a>
        <a href="https://instagram.com">
          <Image src={instagram} />
        </a>
        <a href="https://tiktok.com">
          <Image src={tiktok} />
        </a>
      </div>
    </div>
  );
};

export default BannerFollow;
