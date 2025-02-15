import React from "react";
import { Link } from "react-router-dom";
import { Rating } from '@mui/material';
import FooterLinks from "./FooterLinks";
import styled from "styled-components";
import notAvailable from "../assets/Not-available.png";

const CardBody = styled.div`
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
  .MuiRating-readOnly {
    color: rgb(33, 150, 243);
  }
`;

const DetailsComponent = ({ infoId, type }) => {
  return (
    <>
      {(infoId.title || infoId.name) && (
        <CardBody>
          <CardBodyImg>
            <img
              alt={infoId.title || infoId.name}
              src={
                infoId.poster_path ||
                infoId.backdrop_path ||
                infoId.profile_path
                  ? `https://image.tmdb.org/t/p/w342/${
                      infoId.poster_path ||
                      infoId.backdrop_path ||
                      infoId.profile_path
                    }`
                  : notAvailable
              }
            />
          </CardBodyImg>
          <CardBodyTxt>
            <h2>{infoId.title || infoId.name}</h2>
            {type !== "person" && (
              <Rating
                value={infoId.vote_average / 2}
                precision={0.5}
                readOnly
                max={5}
              />
            )}
            <p>{infoId.overview || infoId.biography}</p>

            {type !== "person" && (
              <>
                {type === "movie" && <p>Duration: {infoId.runtime} min. </p>}

                {type === "tv" && (
                  <>
                    <p>Seasons: {infoId.number_of_seasons}</p>
                    <p>Episodes: {infoId.number_of_episodes}</p>
                    <p>
                      Duration:
                      {infoId.episode_run_time
                        ? ` ${infoId.episode_run_time} min.`
                        : ` N/A`}
                    </p>
                  </>
                )}
                {(type === "movie" || "tv") && infoId.genres && (
                  <p>
                    Genres:
                    <Link to="">
                      {infoId.genres.map((genre) => " " + genre.name)}
                    </Link>
                  </p>
                )}
                {type === "movie" && (
                  <>
                    <p>
                      Budget:
                      {infoId.budget
                        ? ` $ ${infoId.budget.toLocaleString("en-UK")}`
                        : " N/A"}
                    </p>

                    <p>
                      Revenue:
                      {infoId.revenue
                        ? ` $ ${infoId.revenue.toLocaleString("en-UK")}`
                        : " N/A"}
                    </p>
                  </>
                )}
                {infoId.production_companies && (
                  <p>
                    Production:
                    {infoId.production_companies.map(
                      (company, i) => (i ? ", " : " ") + company.name
                    )}
                  </p>
                )}
              </>
            )}
            {infoId.homepage ? (
              <FooterLinks homepage={infoId.homepage} />
            ) : (
              <FooterLinks />
            )}
          </CardBodyTxt>
        </CardBody>
      )}
    </>
  );
};

export default DetailsComponent;
