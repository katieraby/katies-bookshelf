import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  font-size: 60px;
  width: 100%;
  background-color: #4c1c00;
  margin-top: 0px;
  padding: 10px;
  border-bottom: 10px solid #311200;
  text-align: center;
`;

const Header = () => {
  return (
    <header>
      <Title>Katie's Bookshelves</Title>
    </header>
  );
};

export default Header;
