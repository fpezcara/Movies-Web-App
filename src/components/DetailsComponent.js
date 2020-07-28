import React from "react";
import { Link} from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import FooterLinks from "./FooterLinks";
import styled from "styled-components";

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
  .MuiRating-readOnly {
    color: rgb(33, 150, 243);
  }
`;

const DetailsComponent = ({ infoId, type }) => {
  return (
    <CardBody>
      <CardBodyImg>
        <img
          alt={infoId.title || infoId.name}
          src={`https://image.tmdb.org/t/p/w342/${
            infoId.poster_path || infoId.backdrop_path || infoId.profile_path
          }`}
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
            <p>Duration: {infoId.runtime} min. </p>
            {type === "tv" && <p>Seasons: {infoId.number_of_seasons}</p> && (
              <p>Episodes: {infoId.number_of_episodes}</p>
            )}
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
              <Link to="">
                {infoId.genres.map((genre) => genre.name + " ")}
              </Link>
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
          </>
        )}
        <FooterLinks />
      </CardBodyTxt>
    </CardBody>
  );
};

export default DetailsComponent;