import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowBack } from "@styled-icons/evaicons-solid/ArrowBack";
import { ArrowForward } from "@styled-icons/evaicons-solid/ArrowForward";

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

const Pagination = ({ pageNumbers, paginate }) => {
  const pageNumbersArray = [];

  for (let i = 1; i <= pageNumbers; i++) {
    pageNumbersArray.push(i);
  }
  return (
    <PaginationTable>
      <Link>
        <ArrowContainer>
          <ArrowBack />
        </ArrowContainer>
      </Link>

      {pageNumbersArray.map(
        (number) =>
          number <= 5 && (
            <li key={number}>
              {/* necesito componentizar type para poder introducirlo */}
              {/* <Link to={`${type}/${category}/page/${number}`} onClick={() => paginate(number)}> */}
              <Link to={`page/${number}`} onClick={() => paginate(number)}>
                {number}
              </Link>
            </li>
          )
      )}
      <span>
        <Link to="#">...</Link>
      </span>
      <span>
        <Link>{pageNumbers}</Link>
      </span>
      <Link>
        <ArrowContainer>
          <ArrowForward />
        </ArrowContainer>
      </Link>
    </PaginationTable>
  );
};

export default Pagination;
