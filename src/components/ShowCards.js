import React, { useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import IndividualCard from "./IndividualCard";
import PaginationComponent from "./PaginationComponent";
import { theme } from "../context/theme";

console.log(theme);
const Container = styled.article`
  background-color: ${theme.background_color};
  font-family: ${theme.font_family};
  color: ${theme.font_color};
  a {
    text-decoration: none;
    color: ${theme.font_color};
  }
`;
const DivWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  a {
    text-decoration: none;
    margin: 0;
    height: auto;
    margin-bottom: 20px;
    padding: 0px 4px;
    overflow: hidden;
    width: 20%;
    height: 20;
  }
`;
const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
`;

const Title = styled.div`
  display: flex;
  padding: 2% 10%;
  align-items: center;
  justify-content: flex-start;
`;

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

const ShowCards = ({ info, pagesTotal, postsPerPage }) => {
  const type = useParams().type;

  return (
    <Container>
      <Title>
        {type === "movie"
          ? "Películas que son tendencia"
          : "Series que son tendencia"}
      </Title>
      <DivWrap>
        <IndividualCard info={info} />
      </DivWrap>

      <PaginationContainer>
        <PaginationComponent
          postsPerPage={postsPerPage}
          pagesTotal={pagesTotal}
        />
      </PaginationContainer>
    </Container>
  );
};

export default ShowCards;
