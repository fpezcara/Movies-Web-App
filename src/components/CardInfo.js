import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Rating from "@material-ui/lab/Rating";
import FooterLinks from "./FooterLinks";

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
const CardLinks = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
    padding: 10px;
    font-size: 20px;
    font-weight: 700;
  }
`;

const CardBody = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

const CardBodyImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 250px;
  img {
    width: 250px;
    height: auto;
  }
`;

const CardBodyTxt = styled.div`
  padding-left: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    a {
      text-decoration: none;
      color: rgb(33, 150, 243);
    }
  }

  h2 {
    margin: 0 0 20px 0;
    padding: 0;
  }
`;

const CardBodyFooter = styled.footer``;

const CardInfo = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const id = useParams().id;
  const type = useParams().type;

  const infoId = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
  );
  console.log(infoId);

  return (
    <Container>
      {infoId.poster_path && (
        <>
          <CardImageContainer>
            <CardImage
              img={`https://image.tmdb.org/t/p/original${infoId.backdrop_path}`}
            />
          </CardImageContainer>
          <CardLinks>
            <Link>INFO</Link>
            <Link>{infoId.title ? "CAST" : "EPISODES"}</Link>
            <Link>{infoId.title ? "VIDEOS" : "CAST"}</Link>
            <Link>SIMILAR</Link>
          </CardLinks>
          <CardBody>
            <CardBodyImg>
              <img
                src={`https://image.tmdb.org/t/p/w342/${infoId.poster_path}`}
              />
            </CardBodyImg>
            <CardBodyTxt>
              <h2>{infoId.title || infoId.name}</h2>
              <Rating
                value={infoId.vote_average / 2}
                precision={0.5}
                readOnly
                max={5}
              />
              <p>{infoId.overview}</p>
              {infoId.title ? (
                <p>Duration: {infoId.runtime} min. </p>
              ) : (
                <p>Seasons: {infoId.number_of_seasons}</p>
              )}
              {infoId.name && <p>Episodes: {infoId.number_of_episodes}</p>}
              {infoId.name && (
                <p>
                  Duration:
                  {infoId.episode_run_time.length
                    ? ` ${infoId.episode_run_time} min.`
                    : ` N/A`}
                </p>
              )}
              <p>
                Genres:
                <Link> {infoId.genres.map((genre) => genre.name + " ")} </Link>
              </p>
              {infoId.title && (
                <p>
                  Budget:
                  {infoId.budget
                    ? ` $ ${infoId.budget.toLocaleString("en-UK")}`
                    : " N/A"}
                </p>
              )}
              {infoId.title && (
                <p>
                  Revenue:
                  {infoId.revenue
                    ? ` $ ${infoId.revenue.toLocaleString("en-UK")}`
                    : " N/A"}
                </p>
              )}
              <p>
                Production:
                {infoId.production_companies.map(
                  (company, i) => (i ? ", " : " ") + company.name
                )}
              </p>
              <FooterLinks id={id} homepage={infoId.homepage} />
            </CardBodyTxt>
          </CardBody>
        </>
      )}
    </Container>
  );
};

export default CardInfo;
