import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ShowCards from "./ShowCards";

const SearchComponent = () => {
  const search = useParams().search;
  const page = useParams().page;
  const apiKey = process.env.REACT_APP_API_KEY;

  const searchFetch = useFetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=${page}&include_adult=false`
  );

  const result = search.charAt(0).toUpperCase() + search.slice(1);

  return (
    <>
      <ShowCards
        info={searchFetch.results}
        pagesTotal={searchFetch.total_pages}
        title={`Results For: ${result}`}
      />
    </>
  );
};

export default SearchComponent;
