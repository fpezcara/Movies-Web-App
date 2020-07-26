import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import notAvailable from "../assets/Not-available.png";

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
  :hover img {
    transform: scale(1.1);
    transition: all 0.3s ease 0s, height 0s ease 0s;
  }
`;

const Title = styled.div`
  margin: 0;
  height: 60px;
  display: flex;
  align-items: center;
`;

const IndividualCard = ({ id, title, img, type }) => {
  return (
    <Link to={`/${type}/${id}/info`} key={id}>
      <Card key={id}>
        <img
          alt={title}
          src={img ? `https://image.tmdb.org/t/p/w500/${img}` : notAvailable}
        />
        <Title>
          <p>{title}</p>
        </Title>
      </Card>
    </Link>
  );
};

export default IndividualCard;
