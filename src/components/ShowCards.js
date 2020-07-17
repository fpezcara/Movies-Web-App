import React from "react";
import styled from "styled-components";
import IndividualCard from "./IndividualCard";
import PaginationComponent from "./PaginationComponent";

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 80%;
  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 32px;
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

const ShowCards = ({ info, pagesTotal, postsPerPage, type }) => {
  return (
    <Container>
      <Title>
        {type === "movie"
          ? "Películas que son tendencia"
          : "Series que son tendencia"}
      </Title>

      {info &&
        info.map((card) => (
          <IndividualCard
            id={card.id}
            img={card.poster_path}
            key={card.id}
            title={card.title ? card.title : card.name}
            type={type}
          />
        ))}

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
