import React from "react";
import styled from "styled-components";
import IndividualCard from "./IndividualCard";
import PaginationComponent from "./PaginationComponent";

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  align-items: center;
`;

const IndividualCardContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  a {
    text-decoration: none;
    overflow: hidden;
    color: inherit;
    width: 270px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 32px;
  padding: 70px 30px 50px 80px;
  display: flex;
  justify-content: flex-start;
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

const ShowCards = ({ info, pagesTotal, postsPerPage, type, title }) => {
  return (
    <Container>
      <CardContainer>
        <Title>{title}</Title>
        <IndividualCardContainer>
          {info &&
            info.map((card) => (
              <IndividualCard
                id={card.id}
                img={card.poster_path}
                key={card.id}
                titleCard={card.title ? card.title : card.name}
                type={type}
              />
            ))}
        </IndividualCardContainer>
        <PaginationContainer>
          <PaginationComponent
            postsPerPage={postsPerPage}
            pagesTotal={pagesTotal}
          />
        </PaginationContainer>
      </CardContainer>
    </Container>
  );
};

export default ShowCards;
