import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowRight } from "@styled-icons/typicons/ArrowRight";
import IndividualCard from "./IndividualCard";

const CardsRowContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  a {
    margin: 0;
    text-decoration: none;
    color: rgb(220, 221, 222);
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-weight: light;
  }
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 1.5em;
      color: rgb(33, 150, 243);
    }
  }
`;

const RightArrow = styled(ArrowRight)`
  height: 1.7em;
  width: 1.7em;
  padding-left: 10px;
  color: rgb(33, 150, 243);
`;

const CardContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-end;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5em;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5em
  }
`;

const CardsRow = ({ info, title, type, category }) => {
  const page = 1;

  return (
    <>
      {info && (
        <CardsRowContainer>
          <Link to={`/${type}/${category}/page/${page}`}>
            <LinkContainer>
              <h2>{title}</h2>
              <RightArrow />
            </LinkContainer>
          </Link>
          <CardContainer>
            {info &&
              info.map(
                (card, i) =>
                  i <= 4 && (
                    <IndividualCard
                      id={card.id}
                      img={card.poster_path}
                      titleCard={card.title || card.name}
                      link={`/${type}/${card.id}/info`}
                      key={card.id}
                    />
                  )
              )}
          </CardContainer>
        </CardsRowContainer>
      )}
    </>
  );
};

export default CardsRow;
