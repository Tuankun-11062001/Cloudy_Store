import { appSvg } from "@/data/svg";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

export const BoxSliderBlog = ({ data, key }) => {
  return (
    <div className="box_slider_blog" key={key}>
      <img src={data.thumbnail} />
      <div className="info">
        <h2>
          <abbr title="title">{data.title}</abbr>
        </h2>
        <p className="info_des">{data.description}</p>
        <div className="info_bottom">
          <Link
            href={{
              pathname: `/blog/${data._id}`,
              query: { name: data.title, id: data._id },
            }}
          >
            <p className="check">Check it out {appSvg.arrowDown}</p>
          </Link>
          <div className="other">
            <p>
              {appSvg.cloud} {data.cloudy.length} Cloudy
            </p>
            <p>
              {appSvg.view} {data.view} Views
            </p>
            <p>
              {appSvg.share} {data.share} Share
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BoxBlogCategorySlider = ({ data, key }) => {
  return (
    <div className="box_blog_category_slider" key={key}>
      <img src={data.thumbnail} />
      <div className="info">
        <span>{data.category.categoryName}</span>
        <h3>{data.title}</h3>
        <p className="des">{data.description}</p>
        <Link
          href={{
            pathname: `/blog/${data._id}`,
            query: { name: data.title, id: data._id },
          }}
        >
          <p className="check">Check it out!</p>
        </Link>
      </div>
    </div>
  );
};
