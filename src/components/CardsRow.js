import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowRight } from "@styled-icons/typicons/ArrowRight";

const LinkContainer = styled.article`
  display: flex;
  align-items: center;
  margin: 0; 
  h2 {
    font-size: 32px;
    font-weight: lighter;
  }
`;

const RightArrow = styled(ArrowRight)`
  height: 25px;
  width: 25px;
  padding-left: 10px;
  color: rgb(33, 150, 243);
`;

const CardContainer = styled.article`
  display: flex;
`;
const Card = styled.article`
  height: auto;
  margin-bottom: 20px;
  padding: 0px 4px;
  overflow: hidden;
  img {
    width: 80%;
    height: 80%;
  }
  :hover {
    img {
      transform: scale(1.1);
      transition: all 0.4s;
    }
  }
`;

const CardsRow = ({ info, title, type }) => {
  const [category, setCategory] = useState("trending");
  const page = 1;

  return (
    <>
      <Link to={`${category}/${type}/page/${page}`}>
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
                <Link to={`${type}/${card.id}`} key={card.id}>
                  <Card key={card.id}>
                    <img
                      alt={card.title}
                      src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                    />
                    <p>{card.title ? card.title : card.name}</p>
                  </Card>
                </Link>
              )
          )}
      </CardContainer>
    </>
  );
};

export default CardsRow;
