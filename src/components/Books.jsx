import React, { Component } from "react";

class Books extends Component {
  state = { booksToRead: [], booksFinished: [] };
  render() {
    return <section className="bookshelves-container"></section>;
  }
}

export default Books;
