import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import IndividualCard from "./IndividualCard";
import PaginationComponent from "./PaginationComponent";

const Container = styled.article`
  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
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
  padding: 20px;
  a {
    text-decoration: none;
    padding: 8px 16px;
  }
  ul {
    list-style-type: none;
  }

  .MuiPaginationItem-root {
    color: rgb(220, 221, 222);
    :hover {
      background-color: rgb(97, 97, 97);
      color: rgb(35, 39, 42);
    }
  }
  .MuiPaginationItem-root.Mui-selected {
    background-color: rgb(97, 97, 97);
  }
`;

const Title = styled.div`
  display: flex;
  padding: 2% 10%;
  align-items: center;
  justify-content: flex-start;
  font-size: 32px;
  font-weight: 300;
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
