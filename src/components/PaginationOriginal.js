import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowBack } from "@styled-icons/evaicons-solid/ArrowBack";
import { ArrowForward } from "@styled-icons/evaicons-solid/ArrowForward";
import Pagination from "@material-ui/lab/Pagination";

const PaginationTable = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const ArrowContainer = styled.li`
  width: 30px;
  height: auto;
`;

const Pagination = ({ pagesTotal, paginate }) => {
  const pagesTotalArray = [];

  for (let i = 1; i <= pagesTotal; i++) {
    pagesTotalArray.push(i);
  }
  return <Pagination />;
};

export default Pagination;
