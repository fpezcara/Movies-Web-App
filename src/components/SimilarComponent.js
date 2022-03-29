import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import IndividualCard from "./IndividualCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapContainer = styled.div`
  width: 90%;
  margin-bottom: 10px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5em;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5em;
  }
`;

const SimilarComponent = () => {
  const { type } = useParams();
  const { id: idParams } = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;

  const { results } = useFetch(
    `https://api.themoviedb.org/3/${type}/${idParams}/recommendations?api_key=${apiKey}&language=en-US&page=1`
  );
  return (
    <Container>
      <WrapContainer>
        {results &&
          results.map((recomm) => (
            <IndividualCard
              type={type}
              id={recomm.id}
              overview={recomm.overview}
              titleCard={recomm.title || recomm.original_name}
              img={recomm.poster_path || recomm.backdrop_path}
              key={recomm.id}
              link={`/${type}/${recomm.id}/info`}
            />
          ))}
      </WrapContainer>
    </Container>
  );
};

export default SimilarComponent;
