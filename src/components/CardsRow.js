import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const CardContainer = styled.article`
  display: flex;
`;
const Card = styled.div`
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
  const [page, setPage] = useState(1);
  return (
    <>
      {/* <Link to={`/${type}/${category}/page/${page}`}> */}
      <Link to={`${category}`}>
        <h2>{title}</h2>
      </Link>
      <CardContainer>
        {info.map(
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
