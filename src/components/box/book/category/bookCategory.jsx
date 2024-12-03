import React from "react";
import { BookCategoryCard } from "../card/bookCard";

const BookCategory = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const resCategory = await fetch(`${baseUrl}/category?q=book`, {
    next: {
      revalidate: 1,
    },
  });
  const { data } = await resCategory.json();

  return (
    <div className="book_category">
      <h2>Categories</h2>
      <div className="book_category_list">
        {data.map((item) => (
          <BookCategoryCard data={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default BookCategory;
