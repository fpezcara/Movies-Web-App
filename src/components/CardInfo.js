import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;

const CardInfo = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const id = useParams().id;
  const type = useParams().type;

  const infoId = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
  );

  console.log(infoId);

  return (
    <Container>
      {infoId && (
        <>
          <h1>CARD INFO</h1>
          <p>Nombre: {infoId.title || infoId.name}</p>
          <p>Rating: {infoId.vote_average} </p>
        </>
      )}
    </Container>
  );
};

export default CardInfo;
