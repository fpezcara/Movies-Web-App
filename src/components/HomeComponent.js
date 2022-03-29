import React from "react";
import CardsRow from "./CardsRow";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  
  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`;

const HomeComponent = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const { results: movies_results } = useFetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  );
  const { results: series_results } = useFetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
  );

  return (
    <HomeContainer>
      {movies_results && (
        <CardsRow
          type={"movie"}
          title={"Trending Movies"}
          info={movies_results}
          category={"trending"}
        />
      )}
      {series_results && (
        <CardsRow
          type={"tv"}
          title={"Trending TV Shows"}
          info={series_results}
          category={"trending"}
        />
      )}
    </HomeContainer>
  );
};

export default HomeComponent;
