import React from "react";
import BookCard from "./BookCard";

const BookList = props => {
  return (
    <main>
      <div>{props.children}</div>
      <section className="bookcase">
        {console.log(props.bookArray)}
        {props.bookArray.map(book => {
          return (
            <BookCard
              key={book.id}
              {...book.volumeInfo}
              selectedBook={props.selectedBook}
            />
          );
        })}
      </section>
    </main>
  );
};

export default BookList;
