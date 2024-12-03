import React, { Suspense } from "react";
import { SliderControl, SliderBlogCategoryControl } from "./sliderControl";
import {
  BoxSliderBlog,
  BoxBlogCategorySlider,
} from "../box/blog/slider/boxSlider";

export const BlogSlider = ({ dataSlider }) => {
  const { data } = dataSlider;
  return (
    <div className="blog_slider">
      <Suspense fallback={<p>Loading..</p>}>
        <SliderControl data={data} />
      </Suspense>
      <div className="blog_slider_items">
        {data.map((blogSlider) => (
          <BoxSliderBlog data={blogSlider} key={blogSlider._id} />
        ))}
      </div>
    </div>
  );
};

export const BlogCategorySlider = ({ data }) => {
  return (
    <div className="blog_category_slider">
      <Suspense>
        <SliderBlogCategoryControl data={data} />
      </Suspense>
      <div className="blog_category_slider_items">
        {data.map((blog) => (
          <BoxBlogCategorySlider data={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};
