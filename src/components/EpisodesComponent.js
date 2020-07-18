import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.article`
  padding: 50px;
`;

const EpisodesComponent = (seasons) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [season, setSeason] = useState(1);
  const numero = parseInt(seasons);
  const id = useParams().id;
  const [optionSeason, setOptionSeason] = useState([]);

  console.log(typeof numero);
  const seasonsFeth = useFetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${apiKey}&language=en-US`
  );
  console.log(useParams());
  console.log(seasons);
  console.log(seasonsFeth);
  return (
    <Container>
      <select name="select">
        {/* {optionSeason && optionSeason.filter((option, i) => console.log()) */}
        <option value={season}>hola</option>
      </select>
    </Container>
  );
};

export default EpisodesComponent;
