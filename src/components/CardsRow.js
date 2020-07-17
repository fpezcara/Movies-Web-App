import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "@styled-icons/typicons/ArrowRight";

const CardsRowContainer = styled.article`
  padding: 20px;
  width: 90%;
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
`;
const Card = styled.article`
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
    img {
      transform: scale(1.1);
      transition: all 0.4s;
    }
  }
`;

const CardsRow = ({ info, title, type }) => {
  const [category] = useState("trending");
  const page = 1;

  return (
    <>
      {info && (
        <CardsRowContainer>
          <Link to={`/${category}/${type}/page/${page}`}>
            <LinkContainer>
              <h2>{title}</h2>
              <RightArrow />
            </LinkContainer>
          </Link>
          <CardContainer>
            {info.map(
              (card, i) =>
                i <= 4 && (
                  <Link to={`/${type}/${card.id}/info`} key={card.id}>
                    <Card key={card.id}>
                      <img
                        alt={card.title}
                        src={
                          card.poster_path
                            ? `https://image.tmdb.org/t/p/w500${card.poster_path}`
                            : "N/A"
                        }
                      />
                      <p>{card.title ? card.title : card.name}</p>
                    </Card>
                  </Link>
                )
            )}
          </CardContainer>
        </CardsRowContainer>
      )}
    </>
  );
};

export default CardsRow;
