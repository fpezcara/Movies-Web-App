import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  Link,
} from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import CastComponent from "./CastComponent";
import EpisodesComponent from "./EpisodesComponent";
import InfoComponent from "./InfoComponent";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-bottom: 50px;
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
  padding: 40px;
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
  const infoId = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
  );
  console.log(useParams());
  return (
    <Router>
      <Container>
        {infoId.poster_path && (
          <>
            <CardImageContainer>
              <CardImage
                img={`https://image.tmdb.org/t/p/original${infoId.backdrop_path}`}
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
            <Switch>
              <Route
                exact
                path="/:type/:id/info"
                component={() => <InfoComponent infoId={infoId} />}
              ></Route>
              <Route path="/:type/:id/cast" component={CastComponent}></Route>
              <Route
                path="/:type/:id/videos"
                component={EpisodesComponent}
              ></Route>
              <Route
                path="/:type/:id/similar"
                render={() => <p>Similar</p>}
              ></Route>
            </Switch>
          </>
        )}
      </Container>
    </Router>
  );
};

export default IdCard;
