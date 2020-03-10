import React from "react";

const BookCard = ({ title, imageLinks, selectedBook }) => {
  return (
    <span className="bookCard">
      <img
        src={imageLinks.thumbnail}
        alt={title}
        onClick={() => {
          selectedBook(title);
        }}
      ></img>
      <div className="line"></div>
    </span>
  );
};

export default BookCard;
