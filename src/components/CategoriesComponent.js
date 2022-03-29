import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import CardsRow from "./CardsRow";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const CategoriesComponent = () => {
  const { type } = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;

  const categories = {
    movie: {
      popular: {
        category: "popular",
        title: "Popular Movies",
        url: `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=en-US&page=1`,
      },
      top_rated: {
        category: "top_rated",
        title: "Top Rated Movies",
        url: `https://api.themoviedb.org/3/${type}/top_rated?api_key=${apiKey}&language=en-US&page=1`,
      },
      upcoming: {
        category: "upcoming",
        title: "Upcoming Movies",
        url: `https://api.themoviedb.org/3/${type}/upcoming?api_key=${apiKey}&language=en-US&page=1`,
      },
      now_playing: {
        category: "now_playing",
        title: "Now Playing Movies",
        url: `https://api.themoviedb.org/3/${type}/now_playing?api_key=${apiKey}&language=en-US&page=1`,
      },
    },
    tv: {
      popular: {
        category: "popular",
        title: "Popular TV Shows",
        url: `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=en-US&page=1`,
      },
      top_rated: {
        category: "top_rated",
        title: "Top Rated TV Shows",
        url: `https://api.themoviedb.org/3/${type}/top_rated?api_key=${apiKey}&language=en-US&page=1`,
      },
      on_the_air: {
        category: "on_the_air",
        title: "Currently Airing TV Shows",
        url: `https://api.themoviedb.org/3/${type}/on_the_air?api_key=${apiKey}&language=en-US&page=1`,
      },
    },
  };

  const popularTvShows = useFetch(categories[type].popular.url);

  const topRatedTvShows = useFetch(categories[type].top_rated.url);
  const onTheAirTvShows = useFetch(categories.tv.on_the_air.url);

  const upcomingMovies = useFetch(categories.movie.upcoming.url);

  const nowPlayingMovies = useFetch(categories.movie.now_playing.url);

  return (
    <Container>
      {type && (
        <>
          <CardsRow
            title={categories[type].popular.title}
            category={categories[type].popular.category}
            info={popularTvShows.results}
            type={type}
          />
          <CardsRow
            title={categories[type].top_rated.title}
            category={categories[type].top_rated.category}
            info={topRatedTvShows.results}
            type={type}
          />
          <CardsRow
            title={categories.movie.upcoming.title}
            category={categories.movie.upcoming.category}
            info={upcomingMovies.results}
            type={type}
          />
          <CardsRow
            title={categories.tv.on_the_air.title}
            category={categories.tv.on_the_air.category}
            info={onTheAirTvShows.results}
            type={type}
          />

          <CardsRow
            title={categories.movie.now_playing.title}
            category={categories.movie.now_playing.category}
            info={nowPlayingMovies.results}
            type={type}
          />
        </>
      )}
    </Container>
  );
};

export default CategoriesComponent;
