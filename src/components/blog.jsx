"use client";
import React, { useEffect, useState } from "react";
import TitleApp from "./title";
import { useTranslations } from "next-intl";
import { handlerGetPost } from "@/api/blog";
import Posts from "./posts";
import LoadingClient from "./loadingClient";
import Empty from "./empty";

const Blog = () => {
  const t = useTranslations("Blog");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await handlerGetPost();
        if (res) {
          setPosts(res);
          setLoading(false);
        }
      } catch (error) {
        console.log("err fetch");
      }
    })();
  }, []);
  // const posts = await handlerGetPost();
  return (
    <div className="home_blog">
      <div className="title_blog">
        <TitleApp title={t("title")} />
      </div>
      <div className="content">
        <div className="left">
          <p>{t("blog_left_content_1")}</p>
          <p>{t("blog_left_content_2")}</p>
          <p>{t("blog_left_content_3")}</p>
          <p>{t("blog_left_content_4")}</p>
        </div>
        <div className="right">
          <h3>Lastest Blog</h3>
          {loading ? (
            <LoadingClient />
          ) : posts?.data?.length < 1 ? (
            <Empty />
          ) : (
            <div className="list_blog">
              {posts?.data?.map((post) => (
                <Posts data={post} key={post._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
