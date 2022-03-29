import React from "react";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import IndividualCard from "./IndividualCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const WrapContainer = styled.div`
  width: 90%;
  margin-bottom: 10px;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.3em;
  flex-wrap: wrap;
  margin: 0;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CastComponent = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const { id } = useParams();
  const { type } = useParams();

  const { cast } = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}`
  );

  return (
    <Container>
      <WrapContainer>
        {cast &&
          cast.map((cast, i) => (
            <IndividualCard
              id={cast.id}
              titleCard={cast.name || cast.title}
              titleExtra={cast.character}
              type={type}
              key={i}
              img={cast.profile_path || cast.poster_path}
              link={
                type !== "person"
                  ? `/person/${cast.id}/info`
                  : `/movie/${cast.id}/info`
              }
            />
          ))}
      </WrapContainer>
    </Container>
  );
};

export default CastComponent;
