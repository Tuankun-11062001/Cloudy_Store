import Image from "next/image";
import React from "react";
import facebook from "../../svgs/facebook.svg";
import youtube from "../../svgs/youtube.svg";
import instagram from "../../svgs/instagram.svg";
import tiktok from "../../svgs/tiktok.svg";
import Posts from "@/components/posts";

const ProfilePage = () => {
  return (
    <div className="profile">
      <div className="profile_banner">
        <img src="/bg.png" />
        <div className="content">
          <div className="image">
            <img src="/avata.jpg" />
          </div>
          <div className="text">
            <h3>Welcome to my Website</h3>
            <h1 data-text="June.Cloudy">June.Cloudy</h1>
            <p className="des">
              Tôi là người sáng lập trang web chuyên bán áo thun với những mẫu
              teen đẹp và độc đáo. Đồng thời, tôi cũng quản lý một kênh YouTube
              về âm nhạc và lập trình. Trong thế giới thời trang của tôi, bạn sẽ
              tìm thấy những sản phẩm phong cách và thú vị. Trên YouTube, tôi
              chia sẻ đam mê âm nhạc qua các video độc đáo, cũng như kinh nghiệm
              lập trình thông qua hướng dẫn thú vị. Hãy ghé thăm và khám phá
              cùng tôi!
            </p>
            <p className="motivation">
              When writing the story of your life, don’t let anyone else hold
              the pen.
            </p>
            <ul>
              <li>
                <a href="https://facebook.com">
                  <Image src={facebook} />
                  <p>Facebook</p>
                </a>
              </li>
              <li>
                <a href="https://youtube.com">
                  <Image src={youtube} />
                  <p>Youtube</p>
                </a>
              </li>
              <li>
                <a href="https://tiktok.com">
                  <Image src={tiktok} />
                  <p>Tiktok</p>
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <Image src={instagram} />
                  <p>Instagram</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="profile_title_post">
        <span></span>
        <h2>My List Blog</h2>
        <span></span>
      </div>
      <div className="profile_layout post_list">
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  );
};

export default ProfilePage;
