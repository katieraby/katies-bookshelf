import React from "react";
import BookCard from "./BookCard";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const BookList = (props) => {
  return (
    <>
      <main className="bookcase">
        {props.children}
        <Droppable droppableId={props.id}>
          {(provided) => (
            <section>
              <Container ref={provided.innerRef} {...provided.droppableProps}>
                {props.bookArray.map((book, index) => {
                  return (
                    <BookCard
                      id={book.id}
                      key={book.id}
                      {...book.volumeInfo}
                      selectedBook={props.selectedBook}
                      index={index}
                    />
                  );
                })}
              </Container>
              {provided.placeholder}
            </section>
          )}
        </Droppable>
      </main>
    </>
  );
};

export default BookList;
