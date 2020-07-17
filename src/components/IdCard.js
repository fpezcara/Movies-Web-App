import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  Link,
  useHistory,
} from "react-router-dom";
import styled from "styled-components";
import CastComponent from "./CastComponent";
import EpisodesComponent from "./EpisodesComponent";
import InfoComponent from "./InfoComponent";
import VideosComponent from "./VideosComponent";
import SimilarComponent from "./SimilarComponent";
import useFetch from "../hooks/useFetch";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-bottom: 20px;
  .MuiRating-readOnly {
    display: flex;
    padding-right: 10px;
    justify-content: flex-start;
    align-items: center;
    color: rgb(33, 150, 243);
  }
`;

const CardImageContainer = styled.article`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
`;
const CardLinks = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px;
  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
    padding: 15px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const IdCard = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const id = useParams().id;
  const type = useParams().type;
  console.log(id);

  const infoId = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
  );

  console.log("id card", infoId);
  return (
    <Router>
      <Container>
        <CardImageContainer>
          <CardImage
            img={
              infoId.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${
                    infoId.backdrop_path
                      ? infoId.backdrop_path
                      : infoId.poster_path
                  }`
                : "N/A"
            }
          />
        </CardImageContainer>
        <CardLinks>
          <Link to={`/${type}/${id}/info`}>INFO</Link>
          <Link to={`/${type}/${id}/${infoId.title ? "cast" : "episodes"}`}>
            {infoId.title ? "CAST" : "EPISODES"}
          </Link>
          <Link to={`/${type}/${id}/${infoId.title ? "videos" : "cast"}`}>
            {infoId.title ? "VIDEOS" : "CAST"}
          </Link>
          <Link to={`/${type}/${id}/similar`}>SIMILAR</Link>
        </CardLinks>
      </Container>
      <Switch>
        <Route
          exact
          path="/:type/:id/info"
          component={() => <InfoComponent infoId={infoId} />}
        ></Route>
        <Route exact path="/:type/:id/cast" component={CastComponent}></Route>
        <Route
          exact
          path="/:type/:id/videos"
          component={VideosComponent}
        ></Route>
        <Route
          exact
          path="/:type/:id/episodes"
          component={EpisodesComponent}
        ></Route>
        <Route
          exact
          path="/:type/:id/similar"
          component={SimilarComponent}
        ></Route>
      </Switch>
    </Router>
  );
};

export default IdCard;
