import React, { useEffect, useState } from "react";
import ShowCards from "./ShowCards";
import { useParams } from "react-router-dom";


const DisplayCardsFull = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const type = useParams().type;
  const category = useParams().category;
  const [cardsInfo, setCardsInfo] = useState([]);
  const [pagesTotal, setPagesTotal] = useState([]);
  const page = useParams().page;


  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${category}/${type}/week?api_key=${apiKey}&page=${page}`
      );
      const data = await res.json();
      setCardsInfo(data.results);
      setPagesTotal(data.total_pages);
    };
    fetchApi();
  }, [page]);

  return (
    <ShowCards
      postsPerPage={cardsInfo.length}
      pagesTotal={pagesTotal}
      info={cardsInfo}
    />
  );
};

export default DisplayCardsFull;
