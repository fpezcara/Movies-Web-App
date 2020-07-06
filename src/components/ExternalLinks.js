import React from "react";
import { Imdb } from "@styled-icons/boxicons-logos/Imdb";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Link as Homepage } from "@styled-icons/fa-solid/Link";
import styled from "styled-components";

const Container = styled.article`
  display: flex;
  color: rgb(220, 221, 222);
  a {
    width: 40px;
    padding-right: 15px;
    text-decoration: none;
    color: rgb(220, 221, 222);
  }
`;

const ExternalLinks = ({ links, homepage }) => {
  const linksExternos = [
    {
      name: "imdb",
      type: links.imdb_id,
      link: `https://www.imdb.com/title/${links.imdb_id}`,
      logo: <Imdb />,
    },
    {
      name: "facebook",
      type: links.facebook_id,
      link: `https://www.facebook.com/${links.facebook_id}`,
      logo: <Facebook />,
    },
    {
      name: "instagram",
      type: links.instagram_id,
      link: `https://www.instagram.com/${links.instagram_id}`,
      logo: <Instagram />,
    },
    {
      name: "twitter",
      type: links.twitter_id,
      link: `https://www.twitter.com/${links.twitter_id}`,
      logo: <Twitter />,
    },
    { name: "homepage", type: homepage, link: homepage, logo: <Homepage /> },
  ];

  return (
    <Container>
      {linksExternos
        .filter((linkExterno) => linkExterno.type)
        .map((linkExterno) => (
          <a href={linkExterno.link}>{linkExterno.logo}</a>
        ))}
    </Container>
  );
};

export default ExternalLinks;
