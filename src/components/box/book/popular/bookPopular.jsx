import React from "react";
import { BookCard } from "../card/bookCard";

const BookPopular = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const resTopBook = await fetch(`${baseUrl}/books/lastestBlog`, {
    next: {
      revalidate: 1,
    },
  });
  const { data } = await resTopBook.json();

  return (
    <>
      {data.map((item) => (
        <div className="book_popular" key={item._id}>
          <h2>Newlatest {item.categoryInfo.categoryName}</h2>
          <div className="book_popular_list">
            {item.books.map((book) => (
              <BookCard key={book._id} data={book} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default BookPopular;
