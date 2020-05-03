import React, { Component } from "react";
import BookList from "./BookList";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import API from "../API";

class Books extends Component {
  state = {
    booksToRead: [],
    booksFinished: [],
    selectedBook: "",
  };

  render() {
    const { booksToRead, booksFinished } = this.state;
    const BookcaseHeader = styled.h2`
      display: block;
      text-align: center;
      color: white;
    `;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <section className="bookshelves-container">
          <BookList
            bookArray={booksToRead}
            selectedBook={this.isSelectedBook}
            id="booksToRead"
          >
            <BookcaseHeader>Books To Read</BookcaseHeader>
          </BookList>

          <BookList
            bookArray={booksFinished}
            selectedBook={this.isSelectedBook}
            id="booksFinished"
          >
            <BookcaseHeader>Books I've Finished</BookcaseHeader>
          </BookList>
        </section>
      </DragDropContext>
    );
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      const newBookArray = [...this.state[source.droppableId]];
      const spliced = newBookArray.splice(source.index, 1);
      newBookArray.splice(destination.index, 0, { ...spliced[0] });

      this.setState({ [source.droppableId]: newBookArray });
    }

    if (destination.droppableId !== source.droppableId) {
      const newSourceArray = [...this.state[source.droppableId]];
      const bookToMove = newSourceArray.splice(source.index, 1);

      const newDestinationArray = [...this.state[destination.droppableId]];
      newDestinationArray.splice(destination.index, 0, { ...bookToMove[0] });

      this.setState(
        {
          [source.droppableId]: newSourceArray,
          [destination.droppableId]: newDestinationArray,
        },
        () => {
          localStorage.setItem(
            "state",
            JSON.stringify(this.state.booksFinished)
          );
        }
      );
    }
  };

  isSelectedBook = (bookName) => {
    this.setState({ selectedBook: bookName });
  };

  completeBook = () => {
    const { booksToRead, selectedBook } = this.state;
    const bookToMove = booksToRead.filter(
      (book) => book.volumeInfo.title === selectedBook
    );
    const newBooksToRead = booksToRead.filter(
      (book) => book.volumeInfo.title !== selectedBook
    );

    this.setState(
      (currentState) => {
        const bookObj = bookToMove[0];
        return {
          booksToRead: newBooksToRead,
          booksFinished: [...currentState.booksFinished, bookObj],
        };
      },
      () => {
        localStorage.setItem("state", JSON.stringify(this.state.booksFinished));
      }
    );
  };

  fetchBooks = () => {
    API.get("2/volumes").then(({ data }) => {
      this.setState({ booksToRead: data.items });
    });
  };

  componentDidMount = () => {
    this.fetchBooks();
    // const oldState = localStorage.state;
    // if (oldState !== undefined) {
    //   const newState = JSON.parse(oldState);
    //   this.setState({ booksFinished: newState });
    // }
  };
}

export default Books;
