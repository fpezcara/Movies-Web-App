import React from "react";
import CardsRow from "./CardsRow";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const HomeContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
  }
`;

const HomeComponent = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const moviesHome = useFetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  );
  const seriesHome = useFetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
  );

  return (
    <HomeContainer>
      {moviesHome && (
        <CardsRow
          type={"movie"}
          title={"Trending Movies"}
          info={moviesHome.results}
          category={"trending"}
        />
      )}
      {seriesHome && (
        <CardsRow
          type={"tv"}
          title={"Trending TV Shows"}
          info={seriesHome.results}
          category={"trending"}
        />
      )}
    </HomeContainer>
  );
};

export default HomeComponent;
