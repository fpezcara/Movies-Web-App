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
  }
`;
const Card = styled.article`
  position: relative;
  height: auto;
  margin-bottom: 20px;
  padding: 0px 4px;
  overflow: hidden;
  img {
    text-align: center;
    width: 100%;
    height: auto;
  }
  :hover {
    transform: scale(1.03);
    transition: transform 0.3s ease;
  }
`;

const Title = styled.div`
  margin: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
