import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import CardsRow from "./CardsRow";

const Container = styled.article`
  padding: 20px;
  h2 {
    font-weight: light;
  }
`;

const CategoriesComponent = () => {
  const type = useParams().type;
  const apiKey = process.env.REACT_APP_API_KEY;

  const movies = [
    {
      title: "Popular movies",
      name: "popular",
      url: `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=en-US&page=1`,
    },
    {
      title: "Top Rated Movies",
      name: "top_rated",
      url: `https://api.themoviedb.org/3/${type}/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    },
    {
      title: "Upcoming Movies",
      name: "upcoming",
      url: `https://api.themoviedb.org/3/${type}/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    },
    {
      title: "Now Playing Movies",
      name: "now_playing",
      url: `https://api.themoviedb.org/3/${type}/now_playing?api_key=${apiKey}&language=en-US&page=1`,
    },
  ];

  const tv = [
    {
      title: "Popular TV Shows",
      name: "popular",
      url: `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=en-US&page=1`,
    },
    {
      title: "Top Rated TV Shows",
      name: "top_rated",
      url: `https://api.themoviedb.org/3/${type}/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    },
    {
      title: "Currently Airing TV Shows",
      name: "on_the_air",
      url: `https://api.themoviedb.org/3/${type}/on_the_air?api_key=${apiKey}&language=en-US&page=1`,
    },
    {
      title: "TV Shows Airing Today",
      name: "airing_today",
      url: `https://api.themoviedb.org/3/${type}/airing_today?api_key=${apiKey}&language=en-US&page=1`,
    },
  ];

  const [movieUrl, setMovieUrl] = useState(``);
  console.log(movies.length);

  {
    if (type === "movie") {
      movies.map((movie, i) => {
        {
          i < movies.length && setMovieUrl(movie.url);
        }
      });
    }
  }
  console.log(movieUrl);
  return (
    <Container>
      {type === "movie"
        ? movies.map((movie, i) => (
            <div key={i}>
              {/* <h2>{movie.name}</h2> */}
              <CardsRow name={movie.name} category={movie.name} />
            </div>
          ))
        : tv.map((tv, i) => (
            <div key={i}>
              {/* <h2>{movie.name}</h2> */}
              <CardsRow name={tv.name} category={tv.name} />
            </div>
          ))}
    </Container>
  );
};

export default CategoriesComponent;
