import React from "react";
import ShowCards from "./ShowCards";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const DisplayCardsFull = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const { type, category, page } = useParams();

  const titles = {
    movie: {
      popular: "Popular Movies",
      top_rated: "Top Rated Movies",
      upcoming: "Upcoming Movies",
      now_playing: "Now Playing Movies",
    },
    tv: {
      popular: "Popular TV Shows",
      top_rated: "Top Rated TV Shows",
      on_the_air: "Currently Airing TV Shows",
    },
  };

  const { total_pages: trending_total_pages, results: trending_results } =
    useFetch(
      `https://api.themoviedb.org/3/${category}/${type}/week?api_key=${apiKey}&page=${page}`
    );

  const { total_pages, results } = useFetch(
    `https://api.themoviedb.org/3/${type}/${category}/?api_key=${apiKey}&page=${page}`
  );

  return (
    <>
      {(trending_results || results) && (
        <ShowCards
          pagesTotal={total_pages || trending_total_pages}
          info={results || trending_results}
          type={type}
          title={
            titles[type][category] || type === "movie"
              ? "Trending Movies"
              : "Trending TV Shows"
          }
        />
      )}
    </>
  );
};

export default DisplayCardsFull;
