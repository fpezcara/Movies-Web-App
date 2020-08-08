import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import notAvailable from "../assets/Not-available.png";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding-left: 6%;
  margin: 0;
`;

const Options = styled.div`
  display: flex;
  padding-left: 20px;
  padding-bottom: 30px;
  select {
    font-size: 16px;
    font-weight: 300;
    color: rgb(220, 221, 222);
    background-color: rgb(35, 39, 42);
    border-radius: 6px;
    padding: 6px 18px 6px 14px;
    border-color: rgb(220, 221, 222);
  }
`;

const WrapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const EpisodeCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 400px;
  font-size: 14px;
  line-height: 20px;
  padding: 20px;
`;

const EpisodeImg = styled.div`
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const ImgNotFound = styled.img`
  width: 230px;
  height: 230px;
  background-color: pink;
`;

const EpisodeTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  p {
    margin: 0;
    padding-right: 15px;
    color: rgb(33, 150, 243);
  }
`;
const EpisodeOverview = styled.div``;

const EpisodesComponent = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [season, setSeason] = useState(1);
  const id = useParams().id;
  const type = useParams().type;

  const infoId = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
  );
  console.log(id);
  console.log(season);
  const seasonsFetch = useFetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${apiKey}`
  );
  console.log(seasonsFetch);

  const handleClick = (e) => {
    e.preventDefault();
    setSeason(e.target.value);
  };

  return (
    <>
      {seasonsFetch && (
        <Container>
          <Options>
            <select name="select" onClick={handleClick}>
              {infoId.seasons &&
                infoId.seasons.map((season) => (
                  <option key={season.id} value={season.season_number}>
                    {season.name}
                  </option>
                ))}
            </select>
          </Options>
          <WrapContainer>
            {seasonsFetch.episodes &&
              seasonsFetch.episodes.map((episode) => (
                <EpisodeCard key={episode.id}>
                  <EpisodeImg>
                    {episode.still_path ? (
                      <img
                        alt={episode.name}
                        src={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
                      />
                    ) : (
                      <ImgNotFound alt="Not found" src={notAvailable} />
                    )}
                  </EpisodeImg>
                  <EpisodeTitle>
                    <p>
                      {episode.episode_number <= 9
                        ? "EP0" + episode.episode_number
                        : "EP" + episode.episode_number}
                    </p>
                    <h4> {episode.name}</h4>
                  </EpisodeTitle>
                  <EpisodeOverview>
                    <span>{episode.overview}</span>
                  </EpisodeOverview>
                </EpisodeCard>
              ))}
          </WrapContainer>
        </Container>
      )}
    </>
  );
};

export default EpisodesComponent;
