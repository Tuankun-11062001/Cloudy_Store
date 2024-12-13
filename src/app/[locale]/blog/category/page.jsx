import ButtonBack from "@/components/box/blog/button/buttonBack";
import { BlogCategoryCard } from "@/components/box/blog/card/blogCategoryCard";
import React, { Suspense } from "react";

const BlogCategoryPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const resCategory = await fetch(`${baseUrl}/category?q=blogs`, {
    next: {
      revalidate: 10,
    },
  });
  const resBannerCategory = await fetch(`${baseUrl}/event`, {
    next: {
      revalidate: 10,
    },
  });
  const category = await resCategory.json();
  const { data } = await resBannerCategory.json();

  return (
    <div className="blog_category_page">
      <div className="blog_category_page_head">
        <img src={data[0]?.bannerCategoryBlog} loading="lazy" alt={`banner`} />
        <div className="border_top"></div>
        <div className="border_bottom"></div>
        <Suspense fallback={<p>Loadding...</p>}>
          <ButtonBack />
        </Suspense>
      </div>

      <div className="blog_category_page_list">
        {category.data.map((blog) => (
          <BlogCategoryCard data={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default BlogCategoryPage;
