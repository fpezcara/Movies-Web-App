import React, { lazy, Suspense } from "react";
import { Route, Switch, useParams, NavLink } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";

const CastComponent = lazy(() => import("./CastComponent"));
const EpisodesComponent = lazy(() => import("./EpisodesComponent"));
const InfoComponent = lazy(() => import("./InfoComponent"));
const VideosComponent = lazy(() => import("./VideosComponent"));
const SimilarComponent = lazy(() => import("./SimilarComponent"));

const Container = styled.section`
  display: flex;
  flex-direction: column;
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

const CardImageContainer = styled.div`
  height: 30em;
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ img }) => img});
  background-size: cover;
  background-position: center top;
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

  const { backdrop_path, poster_path, title } = infoId;
  return (
    <Container>
      {type !== "person" ? (
        <>
          <CardImageContainer>
            <CardImage
              img={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${
                      backdrop_path ? backdrop_path : poster_path
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
              to={`/${type}/${id}/${title ? "cast" : "season"}`}
              activeClassName="current"
            >
              {title ? "CAST" : "EPISODES"}
            </NavLink>
            <NavLink
              to={`/${type}/${id}/${title ? "videos" : "cast"}`}
              activeClassName="current"
            >
              {title ? "VIDEOS" : "CAST"}
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
        <Suspense fallback={<div className="loading">Loading...</div>}>
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
        </Suspense>
      </Switch>
    </Container>
  );
};

export default IdCard;
