import { useEffect, useState } from "react";

const useFetch = (url, page) => {
  const [data, setData] = useState([]);

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
