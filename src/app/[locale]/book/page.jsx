import BookCategory from "@/components/box/book/category/bookCategory";
import BookPopular from "@/components/box/book/popular/bookPopular";
import BookSearch from "@/components/box/book/search/bookSearch";
import { BookSlider } from "@/components/box/book/slider/bookSlider";
import React, { Suspense } from "react";

export const metadata = {
  title: "Book - Cloudy Melody",
  description:
    "Story - Love  📚 Book: Tôi sẽ giới thiệu những câu chuyện và tiểu thuyết nổi tiếng, mang đến cho bạn những giây phút thư giãn và cảm hứng sáng tạo. Đọc sách không chỉ mở rộng kiến thức mà còn giúp nuôi dưỡng tâm hồn.",
};

const BookPage = () => {
  return (
    <div className="book_page">
      <div className="head">
        <Suspense fallback={<p>Loading..</p>}>
          <BookSearch />
        </Suspense>
        <BookSlider />
      </div>
      <div className="content">
        <BookCategory />
        <BookPopular />
      </div>
    </div>
  );
};

export default BookPage;
