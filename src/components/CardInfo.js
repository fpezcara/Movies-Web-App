import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardInfo = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const id = useParams().id;
  const type = useParams().type;
  const [infoId, setInfoId] = useState([]);
  console.log("estoy en card info");

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
      );
      const data = await res.json();
      setInfoId(data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <h1>ESTOY EN CARD INFO</h1>
      <p>Nombre: {infoId.title || infoId.name}</p>
      <p>Rating: {infoId.vote_average} </p>
    </>
  );
};

export default CardInfo;
