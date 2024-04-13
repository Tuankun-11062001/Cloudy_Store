import { handlerGetPost, handlerGetPostSlide } from "@/api/blog";
import Empty from "@/components/empty";
import Posts from "@/components/posts";
import { SwiperSlideImage } from "@/components/swiper";
import React from "react";

const Profile = async () => {
  const data = await handlerGetPost();
  const latestBlog = await handlerGetPostSlide();

  return (
    <div className="profile profile_layout">
      {data.data.length < 1 ? (
        <Empty />
      ) : (
        <>
          <div className="profile_slide">
            <SwiperSlideImage type="blog" data={latestBlog} />
          </div>

          <div className="content">
            <h2>My Blogs</h2>

            <div className="list_blog">
              {data.data.map((post) => (
                <Posts key={post._id} data={post} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
