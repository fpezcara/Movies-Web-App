import React, { useState, useEffect } from "react";
import CardsRow from "./CardsRow";
import styled from "styled-components";

const ContainerCardsRow = styled.section`
  padding: 50px;
  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
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
