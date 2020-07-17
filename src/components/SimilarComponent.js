import React from "react";
import useFetch from "../hooks/useFetch";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import styled from "styled-components";
import IndividualCard from "./IndividualCard";

const Container = styled.article`
  display: flex;
  justify-content: center;
  a {
    color: rgb(220, 221, 222);
  }
`;

const SimilarComponent = () => {
  const type = useParams().type;
  const id = useParams().id;
  const apiKey = process.env.REACT_APP_API_KEY;

  const similar = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
  );

  // usar NavLink en vez de link para despues poder darle una propiedad comola del subrayado abajo

  // console.log(similar.results);
  return (
    <>
      {similar.results &&
        similar.results.map((recomm) => (
          <IndividualCard
            type={type}
            id={recomm.id}
            title={recomm.original_title}
            overview={recomm.overview}
            title={recomm.title ? recomm.title : recomm.name}
            img={recomm.poster_path ? recomm.poster_path : recomm.backdrop_path}
            key={recomm.id}
          />
        ))}
    </>
  );
};

export default SimilarComponent;
