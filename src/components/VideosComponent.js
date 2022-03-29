import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapContainer = styled.div`
  width: 90%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5em;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  iframe {
    width: 400px;
    height: 315px;
    padding: 30px;
    border: none;
    border-radius: 8px;
    align-items: center;
  }
`;

const VideoCaption = styled.div`
  height: 80px;
  p {
    margin: 0;
    width: 400px;
    padding-left: 40px;
  }
`;

const VideosComponent = () => {
  const { type } = useParams();
  const { id } = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;

  const { results } = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}&language=en-US`
  );
  console.log(results);
  return (
    <Container>
      <WrapContainer>
        {results &&
          results.map((video) => (
            <VideoContainer key={video.id}>
              <div  >
                <iframe
                  title={video.name}
                  src={`https://www.youtube.com/embed/${video.key}`}
                ></iframe>
              </div>
              <VideoCaption>
                <p>{video.name}</p>
              </VideoCaption>
            </VideoContainer>
          ))}
      </WrapContainer>
    </Container>
  );
};

export default VideosComponent;
