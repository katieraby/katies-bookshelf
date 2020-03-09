import React from "react";

const BookCard = ({ title, imageLinks }) => {
  console.log(title);
  return (
    <span className="bookCard">
      <img src={imageLinks.thumbnail} alt={title}></img>
      <div className="line"></div>
    </span>
  );
};

export default BookCard;
