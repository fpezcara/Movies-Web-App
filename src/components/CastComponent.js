import React from "react";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import notAvailable from "../assets/Not-available.png";
import IndividualCard from "./IndividualCard";

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

const CastComponent = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const id = useParams().id;
  const type = useParams().type;

  const fetchCast = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}`
  );

  console.log(fetchCast);

  return (
    <WrapContainer>
      {fetchCast.cast &&
        fetchCast.cast.map((cast, i) =>
          type !== "person" ? (
            <IndividualCard
              id={i}
              titleCard={cast.name}
              titleExtra={cast.character}
              type={type}
              key={i}
              img={cast.profile_path}
              link={`/person/${cast.id}/info`}
            />
          ) : (
            <IndividualCard
              id={cast.id}
              titleCard={cast.title}
              titleExtra={cast.character}
              type={type}
              key={cast.id}
              img={cast.poster_path}
              link={`/movie/${cast.id}/info`}
            />
          )
        )}
    </WrapContainer>
  );
};

export default CastComponent;
