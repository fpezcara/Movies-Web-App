import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const IndividualCardContainer = styled.article`
  padding: 20px;
  width: 85%;
`;

const Title = styled.div`
  margin: 0;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    margin-bottom: 20px;
    overflow: hidden;
    width: 20%;
    height: auto;
  }
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

const IndividualCard = ({ info, title }) => {
  const type = useParams().type;
  console.log(info);
  return (
    <IndividualCardContainer>
      {info && (
        <>
          {title && (
            <Title>
              <h2>{title}</h2>
            </Title>
          )}
          <CardContainer>
            {info &&
              info.map((card) => (
                <Link to={`/${type}/${card.id}/info`} key={card.id}>
                  <Card key={card.id}>
                    <img
                      alt={card.title}
                      src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                    />
                    <p>{card.title ? card.title : card.name}</p>
                  </Card>
                </Link>
              ))}
          </CardContainer>
        </>
      )}
    </IndividualCardContainer>
  );
};

export default IndividualCard;
