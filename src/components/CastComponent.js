import React from "react";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import notAvailable from "../assets/Not-available.png";

const Container = styled.article`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  /* padding: 10px; */
`;

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
  img {
    width: 100%;
    height: auto;
  }
  :hover {
    img {
      transform: scale(1.1);
      transition: all 0.4s;
    }
  }
`;
const ImgNotFound = styled.img`
  /* width: 300px;
  height: 400px; */
`;

const ImgContainter = styled.div`
  /* display: flex; */
  justify-content: center;
`;

const ImgCaption = styled.div`
  height: 80px;
`;

const CastComponent = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const id = useParams().id;
  const type = useParams().type;

  const fetchCast = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}`
  );

  return (
    // <Container>
    <WrapContainer>
      {fetchCast.cast &&
        fetchCast.cast.map((cast) => (
          <Link key={cast.id}>
            <Cast key={cast.id}>
              <ImgContainter>
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
    </WrapContainer>
    // </Container>
  );
};

export default CastComponent;
