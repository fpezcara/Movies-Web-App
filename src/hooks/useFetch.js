import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetch = (url, page, id) => {
  const [data, setData] = useState([]);
  // console.log(id);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(url);
      const info = await res.json();
      setData(info);
    };
    fetchApi();
  }, [page, id]);

  return data;
};

export default useFetch;
