import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import IndividualCard from "./IndividualCard";

const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  padding-left: 55px;
  margin: 0;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    overflow: hidden;
    color: inherit;
    width: 270px;
    margin: 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const SimilarComponent = () => {
  const type = useParams().type;
  const idParams = useParams().id;
  const apiKey = process.env.REACT_APP_API_KEY;

  const similar = useFetch(
    `https://api.themoviedb.org/3/${type}/${idParams}/recommendations?api_key=${apiKey}&language=en-US&page=1`
  );

  return (
    <Container>
      {similar.results &&
        similar.results.map((recomm) => (
          <IndividualCard
            type={type}
            id={recomm.id}
            overview={recomm.overview}
            title={recomm.title ? recomm.title : recomm.name}
            img={recomm.poster_path ? recomm.poster_path : recomm.backdrop_path}
            key={recomm.id}
          />
        ))}
    </Container>
  );
};

export default SimilarComponent;
