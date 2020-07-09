import React from "react";
import ShowCards from "./ShowCards";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const DisplayCardsFull = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const type = useParams().type;
  const category = useParams().category;
  const page = useParams().page;

  console.log(category);

  const cardsInfo = useFetch(
    `https://api.themoviedb.org/3/${category}/${type}/week?api_key=${apiKey}&page=${page}`,
    page
  );
  const pagesTotal = cardsInfo.total_pages;

  console.log(cardsInfo);
  return (
    <ShowCards
      postsPerPage={cardsInfo.length}
      pagesTotal={pagesTotal}
      info={cardsInfo.results}
      type={type}
    />
  );
};

export default DisplayCardsFull;
