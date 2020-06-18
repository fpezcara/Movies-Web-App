import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardInfoFull = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const id = useParams().id;
  const type = useParams().type;
  const [infoId, setInfoId] = useState([]);

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
      <p>Nombre: {infoId.title || infoId.name}</p>
      <p>Rating: {infoId.vote_average} </p>
    </>
  );
};

export default CardInfoFull;
