"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import facebook from "../../svgs/facebook.svg";
import youtube from "../../svgs/youtube.svg";
import instagram from "../../svgs/instagram.svg";
import tiktok from "../../svgs/tiktok.svg";
import Posts from "@/components/posts";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../loading";
import { getPostsAsync } from "@/redux/slices/postSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostsAsync());
  }, []);

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
              I am the founder of a website specializing in selling t-shirts
              with beautiful and unique teen designs. At the same time, I also
              manage a YouTube channel about music and programming. In my
              fashion world you will find stylish and interesting products. On
              YouTube, I share my passion for music through unique videos, as
              well as my programming experience through fun tutorials. Come
              visit and explore with me!
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
      {loading ? (
        <Loading />
      ) : (
        <div className="profile_layout post_list">
          {posts.map((post) => (
            <Posts key={post._id} data={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
