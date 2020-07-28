import React from "react";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import notAvailable from "../assets/Not-available.png";

const WrapContainer = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 55px;
  margin: 0;
  a {
    text-decoration: none;
    overflow: hidden;
    color: inherit;
    width: 270px;
    margin: 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  p {
    font-size: 20px;
    margin-bottom: 0;
  }
  span {
    font-size: 16px;
    margin-bottom: 0;
  }
`;

const Cast = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

const ImgContainter = styled.div`
  justify-content: center;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  :hover {
    transform: scale(1.1);
    transition: transform all 0.3s ease;
  }
`;

const ImgCaption = styled.div`
  height: 90px;
`;

const CastComponent = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const id = useParams().id;
  const type = useParams().type;

  const fetchCast = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}`
  );

  const fetchCredits = useFetch(
    `https://api.themoviedb.org/3/person/${id}/${
      "movie" || "tv"
    }_credits?api_key=${apiKey}`
  );

  return (
    <WrapContainer>
      {/* mandar todo a individual card - moodificarla so it fits */}
      {type !== "person" &&
        fetchCast.cast &&
        fetchCast.cast.map((cast, i) => (
          <Link to={`/person/${cast.id}/info`} key={i}>
            <Cast key={cast.id}>
              <ImgContainter key={cast.id}>
                {cast.profile_path ? (
                  <img
                    alt={cast.name}
                    src={`https://image.tmdb.org/t/p/w400/${cast.profile_path}`}
                  />
                ) : (
                  <img alt="Not found" src={notAvailable} />
                )}
              </ImgContainter>
              <ImgCaption>
                <p>{cast.name}</p>
                <span>{cast.character}</span>
              </ImgCaption>
            </Cast>
          </Link>
        ))}
      {fetchCredits.cast &&
        fetchCredits.cast.map((cast) => (
          <Link to={`/${type}/${cast.id}/info`} key={cast.id}>
            <Cast>
              <ImgContainter>
                {cast.poster_path ? (
                  <img
                    alt={cast.title}
                    src={`https://image.tmdb.org/t/p/w400/${cast.poster_path}`}
                  />
                ) : (
                  <img alt="Not found" src={notAvailable} />
                )}
              </ImgContainter>
              <ImgCaption>
                <p>{cast.title}</p>
                <span>{cast.character}</span>
              </ImgCaption>
            </Cast>
          </Link>
        ))}
    </WrapContainer>
  );
};

export default CastComponent;
