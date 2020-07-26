import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowRight } from "@styled-icons/typicons/ArrowRight";

const CardsRowContainer = styled.article`
  width: 90%;
  padding-left: 30px;
  a {
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
`;
const Card = styled.article`
  position: relative;
  height: auto;
  margin-bottom: 20px;
  padding: 0px 4px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
  :hover {
    transform: scale(1.03);
    transition: transform 0.3s ease;
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
