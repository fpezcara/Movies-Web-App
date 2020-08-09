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
  a {
    text-decoration: none;
    overflow: hidden;
    color: inherit;
    width: 270px;
    margin: 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  p {
    font-size: 20px;
    margin-bottom: 0;
  }
  span {
    font-size: 16px;
    margin-bottom: 0;
  }
`;

const Title = styled.div`
  margin: 0;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p {
    margin: 20px 0 0;
    font-size: 20px;
  }
  span {
    margin: 8px 0 20px;
    font-size: 16px;
  }
`;

const IndividualCard = ({ titleCard, titleExtra, img, link }) => {
  return (
    <Link to={link}>
      <Card>
        <img
          alt={titleCard}
          src={img ? `https://image.tmdb.org/t/p/w500/${img}` : notAvailable}
        />
        <Title>
          <p>{titleCard}</p>
          {titleExtra && <span>{titleExtra}</span>}
        </Title>
      </Card>
    </Link>
  );
};

export default IndividualCard;
