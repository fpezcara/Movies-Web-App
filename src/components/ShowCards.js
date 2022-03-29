import React from "react";
import styled from "styled-components";
import IndividualCard from "./IndividualCard";
import PaginationComponent from "./PaginationComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const WrapContainer = styled.div`
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

const CardContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.3em;
  flex-wrap: wrap;
  margin: 0;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 32px;
  padding: 1em 0;
  margin-top: 0.3em;
  align-self: start;
  @media only screen and (max-width: 600px) {
    padding: 0.5em 0;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const ShowCards = ({ info, pagesTotal, title, type }) => {
  return (
    <Container>
      <WrapContainer>
        <Title>{title}</Title>
        <CardContainer>
          {info &&
            info.map((card) => (
              <IndividualCard
                id={card.id}
                img={card.poster_path || card.profile_path}
                key={card.id}
                titleCard={card.title || card.name}
                link={`/${type || card.media_type}/${card.id}/info`}
              />
            ))}
        </CardContainer>
        <PaginationContainer>
          <PaginationComponent pagesTotal={pagesTotal} />
        </PaginationContainer>
      </WrapContainer>
    </Container>
  );
};

export default ShowCards;
