import React from "react";
import BookCard from "./BookCard";

const BookList = props => {
  return (
    <main>
      <div>{props.children}</div>
      <section className="bookcase">
        {props.bookArray.map(book => {
          return <BookCard key={book.id} {...book.volumeInfo} />;
        })}
      </section>
    </main>
  );
};

export default BookList;
