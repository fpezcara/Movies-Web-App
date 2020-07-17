import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const IndividualCardContainer = styled.article`
  padding: 20px;
  width: 85%;
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

const IndividualCard = ({ id, title, img, type }) => {
  return (
    <IndividualCardContainer>
      <CardContainer>
        <Link to={`/${type}/${id}/info`} key={id}>
          <Card>
            <img
              alt={title}
              src={img ? `https://image.tmdb.org/t/p/w500/${img}` : "N/A"}
            />
            <p>{title}</p>
          </Card>
        </Link>
      </CardContainer>
    </IndividualCardContainer>
  );
};

export default IndividualCard;
