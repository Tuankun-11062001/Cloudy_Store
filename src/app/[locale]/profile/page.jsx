import { appSvg } from "@/data/svg";
import React from "react";

export const metadata = {
  title: "Profile - Cloudy Melody",
  description:
    "😀 Profile: Trang này sẽ cho bạn cái nhìn sâu hơn về bản thân tôi, những trải nghiệm và dự định tương lai. Đây cũng là nơi tôi mời gọi sự hợp tác từ các nhà quảng cáo muốn đồng hành cùng tôi trong hành trình này.",
};

const ProfilePage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const resProfile = await fetch(`${baseUrl}/profile`, {
    next: {
      revalidate: 10,
    },
  });

  const profile = await resProfile.json();

  const { data } = profile;

  return (
    <div className="profile_page">
      <h1>Profile</h1>
      <div className="profile_page_head">
        <img src={data[0].user.banner} className="bg" />

        <div className="avatar">
          <img src={data[0].user.avatar} />
        </div>
        <span className="role">
          {data[0].user.admin && "Admin Cloudy melody"}
        </span>
        <div className="info">
          <div className="info_left">
            <h2>{data[0].user.userName}</h2>
            <p>{data[0].userDetail}</p>
          </div>
          <div className="info_right">
            {data[0].user.userSocial.map((item, index) => (
              <a
                key={item._id || index}
                href={item.linkSocial}
                target="_blank"
                className={
                  item.social === "instagram" || item.social === "twitter"
                    ? "dark_white"
                    : ""
                }
              >
                {appSvg[item.social]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="profile_page_content">
        {data[0].content.map((item, index) => (
          <div className="profile_page_about" key={item._id || index}>
            <h2>{item.titleHead}</h2>
            <div
              className="tiptap"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
