import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import IndividualCard from "./IndividualCard";
import PaginationComponent from "./PaginationComponent";

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
  }
`;

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px;
  .MuiPaginationItem-root {
    color: rgb(220, 221, 222);
    :hover {
      background-color: rgb(97, 97, 97);
      color: rgb(35, 39, 42);
    }
  }
  .MuiPaginationItem-root.Mui-selected {
    background-color: rgb(97, 97, 97);
  }
`;

const ShowCards = ({ info, pagesTotal, postsPerPage }) => {
  const type = useParams().type;

  return (
    <Container>
      <IndividualCard info={info} />
      <PaginationContainer>
        <PaginationComponent
          postsPerPage={postsPerPage}
          pagesTotal={pagesTotal}
        />
      </PaginationContainer>
    </Container>
  );
};

export default ShowCards;
