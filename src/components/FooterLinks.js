import React from "react";
import useFetch from "../hooks/useFetch";
import ExternalLinks from "./ExternalLinks";

const FooterLinks = ({ id, homepage }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const links = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${apiKey}`
  );

  console.log(links);

  return <ExternalLinks links={links} homepage={homepage} />;
};

export default FooterLinks;
