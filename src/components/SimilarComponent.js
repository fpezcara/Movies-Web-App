import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
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
    `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${apiKey}&language=en-US`
  );
  console.log(similar.results);
  return (
    <Container>
      <IndividualCard info={similar.results} />
    </Container>
  );
};

export default SimilarComponent;
