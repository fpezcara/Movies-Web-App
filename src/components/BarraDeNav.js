import React from "react";
import { Link } from "react-router-dom";
import { Home } from "@styled-icons/feather/Home";
import { Video } from "@styled-icons/feather/Video";
import { Tv } from "@styled-icons/feather/Tv";
import { Search } from "@styled-icons/feather/Search";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgb(220, 221, 222);
  padding: 10px 20px;
  text-decoration: none;
  margin: 0;
  background-color: rgb(35, 39, 42);
  font-weight: 300;
`;

const BarraDeNav = () => {
  return (
    <Nav>
      <Link to="/">
        <Home size="30" />
      </Link>
      <Link to="/video">
        <Video size="30" />
      </Link>
      <Link to="/tv">
        <Tv size="30" />
      </Link>
      <Link to="/search">
        <Search size="30" />
      </Link>
      <input type="search" placeholder="Búsqueda..." />
    </Nav>
  );
};

export default BarraDeNav;
