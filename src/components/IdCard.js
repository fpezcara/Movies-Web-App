import React from "react";
import { Route, Switch, useParams, NavLink } from "react-router-dom";
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
  background: url(${({ img }) => img});
  background-size: cover;
  background-position: center center;
`;
const CardLinks = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 40px 20px;
  a {
    text-decoration: none;
    color: rgb(168, 170, 173);
    padding: 5px 5px 10px 5px;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
    transition: all 0.3s ease 0s;
  }
  a.current {
    color: rgb(220, 221, 222);
    border-bottom: 2px solid rgb(220, 221, 222);
    padding-bottom: 11px;
    display: block;
  }
`;

const IdCard = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const { id, type } = useParams();

  const infoId = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
  );

  return (
    <Container>
      {type !== "person" ? (
        <>
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
            <NavLink to={`/${type}/${id}/info`} activeClassName="current">
              INFO
            </NavLink>
            <NavLink
              to={`/${type}/${id}/${infoId.title ? "cast" : "season"}`}
              activeClassName="current"
            >
              {infoId.title ? "CAST" : "EPISODES"}
            </NavLink>
            <NavLink
              to={`/${type}/${id}/${infoId.title ? "videos" : "cast"}`}
              activeClassName="current"
            >
              {infoId.title ? "VIDEOS" : "CAST"}
            </NavLink>
            <NavLink to={`/${type}/${id}/similar`} activeClassName="current">
              SIMILAR
            </NavLink>
          </CardLinks>
        </>
      ) : (
        <CardLinks>
          <NavLink to={`/${type}/${id}/info`} activeClassName="current">
            INFORMATION
          </NavLink>
          <NavLink to={`/${type}/${id}/credits`} activeClassName="current">
            CREDITS
          </NavLink>
        </CardLinks>
      )}
      <Switch>
        <Route
          exact
          path="/:type/:id/info"
          component={() => <InfoComponent infoId={infoId} />}
        ></Route>
        <Route exact path="/:type/:id/cast" component={CastComponent}></Route>
        <Route
          exact
          path="/:type/:id/season"
          component={EpisodesComponent}
        ></Route>
        <Route
          exact
          path="/:type/:id/videos"
          component={VideosComponent}
        ></Route>

        <Route
          exact
          path="/:type/:id/similar"
          component={SimilarComponent}
        ></Route>
        <Route
          exact
          path="/:type/:id/credits"
          component={CastComponent}
        ></Route>
      </Switch>
    </Container>
  );
};

export default IdCard;
