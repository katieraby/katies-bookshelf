import React from "react";

const BookList = props => {
  return (
    <main>
      <div>{props.children}</div>
      <section className="bookcase">
        {props.booksToRead.map(book => {
          console.log(book);
          return (
            <img
              key={book.id}
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            ></img>
          );
        })}
      </section>
    </main>
  );
};

export default BookList;
