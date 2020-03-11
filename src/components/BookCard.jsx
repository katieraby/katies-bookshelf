import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  padding: 1px;
`;

const BookCard = ({ title, imageLinks, selectedBook, id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <span className="bookCard">
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <img
              src={imageLinks.thumbnail}
              alt={title}
              onClick={() => {
                selectedBook(title);
              }}
            ></img>
          </Container>
        </span>
      )}
    </Draggable>
  );
};

export default BookCard;
