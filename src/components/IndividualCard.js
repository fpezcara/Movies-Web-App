import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  img {
    width: 80%;
    height: 80%;
  }

  :hover {
    q img {
      transform: scale(1.1);
      transition: all 0.4s;
    }
  }
`;

const IndividualCard = ({ info }) => {
  const type = useParams().type;
  console.log(useHistory());
  return (
    <>
      {info.map((card) => (
        <Link to={`/${type}/${card.id}`} key={card.id}>
          <Card key={card.id}>
            <img
              alt={card.title}
              src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
            />
            <p>{card.title ? card.title : card.name}</p>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default IndividualCard;

{
  /* <Link
onClick={() => history.replace(`/${type}/${card.id}`)}
key={card.id}
>
   */
}
