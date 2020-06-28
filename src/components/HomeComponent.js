import React, { useState, useEffect } from "react";
import CardsRow from "./CardsRow";
import styled from "styled-components";
import { theme } from "../context/theme";

const ContainerCardsRow = styled.section`
  background-color: ${theme.background_color};
  font-family: ${theme.font_family};
  padding: 20px;
  a {
    text-decoration: none;
    color: ${theme.font_color};
  }
`;

const HomeComponent = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [moviesHome, setMoviesHome] = useState([]);
  const [seriesHome, setSeriesHome] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
      );
      const movies = await res.json();
      setMoviesHome(movies.results);
    };
    const fetchSeries = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
      );
      const series = await data.json();
      setSeriesHome(series.results);
    };
    fetchMovies();
    fetchSeries();
  }, []);

  return (
    <ContainerCardsRow>
      <CardsRow
        type={"movie"}
        title={"Películas que son tendencia"}
        info={moviesHome}
      />
      <CardsRow
        type={"tv"}
        title={"Series que son tendencia"}
        info={seriesHome}
      />
    </ContainerCardsRow>
  );
};

export default HomeComponent;
