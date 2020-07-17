import React from "react";
import useFetch from "../hooks/useFetch";
import ExternalLinks from "./ExternalLinks";
import { useParams } from "react-router-dom";

const FooterLinks = ({ homepage }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const id = useParams().id;
  const type = useParams().type;

  const links = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}/external_ids?api_key=${apiKey}`
  );
  return <ExternalLinks links={links} homepage={homepage} />;
};

export default FooterLinks;
