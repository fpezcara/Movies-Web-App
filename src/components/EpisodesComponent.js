import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.article`
  padding: 50px;
`;

const EpisodesComponent = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [season, setSeason] = useState(1);
  const id = useParams().id;
  const type = useParams().type;

  // inicializarlo como un array vacio
  // console.log(infoIdSeasons !== undefined && infoIdSeasons);
  // const [infoSeasons, setInfoSeasons] = useState([]);
  // setInfoSeasons(infoIdSeasons)

  const infoId = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
  );

  // setSeason(season);
  // console.log(option.value);
  {
    // infoId.seasons && infoId.seasons.map((season) => console.log(season));
  }

  const seasonsFetch = useFetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${apiKey}&language=en-US`
  );

  const handleClick = (e) => {
    setSeason(e.target.value);
    console.log(e.target.value);
  };
  // console.log(infoId);
  console.log("fetch:", seasonsFetch);
  // console.log(season);

  return (
    <Container>
      <select name="select" onClick={handleClick}>
        {infoId.seasons &&
          infoId.seasons.map((season) => (
            <option value={season.season_number}>{season.name}</option>
          ))}
      </select>
    </Container>
  );
};

export default EpisodesComponent;
