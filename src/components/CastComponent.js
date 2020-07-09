import React from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const CastComponent = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const id = useParams().id;
  const type = useParams().type;
  //   const fetchCast = useFetch(`  https://api.themoviedb.org/3/movie/550/credits?api_key=f56caaebb5b600d34fe93fe163881e2c
  // `);

  // console.log(fetchCast);

  return (
    <>
      {/* {fetchCast && ( */}
      <>
        <h1>Cast Component</h1>
        <div>Estoy en cast component </div>;
      </>
      {/* )} */}
    </>
  );
};

export default CastComponent;
