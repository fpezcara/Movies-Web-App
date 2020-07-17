import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetch = (url, page) => {
  const [data, setData] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(url);
      const info = await res.json();
      setData(info);
    };
    fetchApi();
  }, [page]);

  return data;
};

export default useFetch;
