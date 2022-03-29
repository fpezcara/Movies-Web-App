import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import notAvailable from "../assets/Not-available.png";

const CardLink = styled(Link)`
  text-decoration: none;
  overflow: hidden;
  color: inherit;
  margin: 0;
  align-self: end;
`;
const Card = styled.div`
  height: auto;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
  :hover img {
    transform: scale(1.1);
    transition: all 0.3s ease 0s, height 0s ease 0s;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 0;
    padding: 0;
    img {
      width: 80%;
    }
    :hover img {
      transform: scale(1.01);
      transition: all 0.5s ease 0s, height 0s ease 0s;
    }
  }
`;

const Title = styled.div`
  margin: 0;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p {
    margin: 20px 0 0 2px;
    font-size: 20px;
  }
  span {
    margin: 8px 0 20px;
    font-size: 16px;
  }

  @media only screen and (max-width: 600px) {
    height: 3.5em;
    p {
      font-size: 18px;
    }
  }
`;

const IndividualCard = ({ titleCard, titleExtra, img, link }) => {
  return (
    <CardLink to={link}>
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
    </CardLink>
  );
};

export default IndividualCard;
