import React from "react";
import ShowCards from "./ShowCards";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const DisplayCardsFull = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const type = useParams().type;
  const category = useParams().category;
  const page = useParams().page;

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

  const cardsTrending = useFetch(
    `https://api.themoviedb.org/3/${category}/${type}/week?api_key=${apiKey}&page=${page}`,
    page
  );

  const cardsInfo = useFetch(
    `https://api.themoviedb.org/3/${type}/${category}/?api_key=${apiKey}&page=${page}`,
    page
  );

  const pagesTotalTrending = cardsTrending.total_pages;

  const pagesTotalInfo = cardsInfo.total_pages;

  console.log(titles[type][category]);

  return (
    <>
      {(cardsTrending || cardsInfo) && category === "trending" ? (
        <ShowCards
          postsPerPage={cardsTrending.length}
          pagesTotal={pagesTotalTrending}
          info={cardsTrending.results}
          type={type}
          title={type === "movie" ? "Trending Movies" : "Trending TV Shows"}
        />
      ) : (
        <ShowCards
          postsPerPage={cardsInfo.length}
          pagesTotal={pagesTotalInfo}
          info={cardsInfo.results}
          type={type}
          title={titles[type][category]}
        />
      )}
    </>
  );
};

export default DisplayCardsFull;
