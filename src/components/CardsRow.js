import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowRight } from "@styled-icons/typicons/ArrowRight";
import IndividualCard from "./IndividualCard";

const CardsRowContainer = styled.article`
  width: 90%;
  a {
    margin: 0;
    text-decoration: none;
    color: rgb(220, 221, 222);
  }
`;

const LinkContainer = styled.article`
  display: flex;
  align-items: center;
  margin: 0;
`;

const RightArrow = styled(ArrowRight)`
  height: 25px;
  width: 25px;
  padding-left: 10px;
  color: rgb(33, 150, 243);
`;

const CardContainer = styled.article`
  display: flex;
  width: 100%;
  a {
    text-decoration: none;
    overflow: hidden;
    color: inherit;
    min-height: 350px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 600px) {
      text-decoration: none;
      overflow: hidden;
      color: inherit;
      min-width: 280px;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
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
                      titleCard={card.title}
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
