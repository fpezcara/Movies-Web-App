import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShowCards from "./ShowCards";
import { useParams, useHistory } from "react-router-dom";

// const CardContainer = styled.section`
// padding: 10px;
// // // justify-content: space-between;
// // // height: 100%;
// // `;

// const ShowCardContainer = styled.div`
// margin-bottom: 20px;
// padding: 0px 4px;
//   flex: 1;

// `;

const DisplayCardsFull = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const type = useParams().type;
  const [cardsInfo, setCardsInfo] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [page, setPage] = useState(1);

  const receivePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/${type}/week?api_key=${apiKey}&page=${page}`
      );
      const data = await res.json();
      setCardsInfo(data.results);
      setPageNumbers(data.total_pages);
    };
    fetchApi();
  }, []);
  return (
    <ShowCards
      receivePage={receivePage}
      postsPerPage={cardsInfo.length}
      pageNumbers={pageNumbers}
      info={cardsInfo}
    />
  );
};

export default DisplayCardsFull;
