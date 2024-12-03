import { BookButtonBack } from "@/components/box/book/button/bookButton";
import { BookCard } from "@/components/box/book/card/bookCard";
import { BookCategorySlider } from "@/components/box/book/slider/bookSlider";
import React from "react";

const DetailCategory = async ({ searchParams }) => {
  const { name, id } = searchParams;
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const resCategory = await fetch(`${baseUrl}/books/recommend/${id}`);
  const { data } = await resCategory.json();

  const bookSlide = data
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  return (
    <div className="book_category_detail">
      <BookButtonBack />
      <BookCategorySlider data={bookSlide} />

      <div className="book_category_detail_list">
        {data.map((book) => (
          <BookCard data={book} key={book._id} />
        ))}
      </div>
    </div>
  );
};

export default DetailCategory;
