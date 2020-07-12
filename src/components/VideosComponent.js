import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.article`
  display: flex;
  padding: 5px 40px;
  justify-content: center;
`;

const WrapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const Video = styled.div``;

const VideoCaption = styled.div`
  height: 80px;
  p {
    margin: 0;
    width: 400px;
    padding-left: 40px;
  }
`;

const VideosComponent = () => {
  const type = useParams().type;
  const id = useParams().id;
  const apiKey = process.env.REACT_APP_API_KEY;

 
  const videos = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}&language=en-US`
  );

  return (
    <Container>
      <WrapContainer>
        {videos.results &&
          videos.results.map((video) => (
            <VideoContainer>
              <Video>
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                ></iframe>
              </Video>
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
