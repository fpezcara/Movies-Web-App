import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardImage = styled.article`
  width: 400px;
  height: 500px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CardBody = styled.article`
  width: 100%;
  height: 100%;
`;

const CardInfo = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const id = useParams().id;
  const type = useParams().type;

  const infoId = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
  );

  console.log(infoId.title);

  return (
    <Container>
      {/* {infoId && (
        <> */}
      <CardImage>
        <img
          alt={infoId.title}
          src={`https://image.tmdb.org/t/p/w500${infoId.poster_path}`}
        />
      </CardImage>
      <CardBody>
        <h2>{infoId.title || infoId.name}</h2>
        <p>Rating: {infoId.vote_average} </p>
      </CardBody>
      {/* </> */}
      {/* )} */}
    </Container>
  );
};

export default CardInfo;
