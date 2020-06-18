import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import LinkIndividualInfo from "./LinkIndividualInfo";
import Pagination from "./Pagination";

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
  margin: 2% 10%;
  align-items: center;
  justify-content: flex-start;
`;

const ShowCards = ({ receivePage, info, pageNumbers, postsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const type = useParams().type;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    receivePage(pageNumber);
  };

  return (
    <>
      <Title>
        {type === "movie"
          ? "Películas que son tendencia"
          : "Series que son tendencia"}
      </Title>
      <DivWrap>
        <LinkIndividualInfo info={info} />
      </DivWrap>
      <PaginationContainer>
        <Pagination
          postsPerPage={postsPerPage}
          pageNumbers={pageNumbers}
          paginate={paginate}
        />
      </PaginationContainer>
    </>
  );
};

export default ShowCards;
