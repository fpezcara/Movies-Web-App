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
  padding: 20px 20px;
  margin: 0;
  background-color: rgb(35, 39, 42);
  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
    padding: 12px 14px;
    align-items: center;
    justify-content: center;
  }

  input {
    border: none;
    background-color: rgb(35, 39, 42);
    font-size: 20px;
    padding: 0px 30px 0px 4px;
    margin: 0;
    color: rgb(220, 221, 222);
  }
`;

const Item = styled.p`
  margin: 0;
`;

const ItemSearch = styled.li`
  margin: 0;
  display: flex;
  padding-left: 10px;
`;

const BarraDeNav = () => {
  return (
    <Nav>
      <Item>
        <Link to="/">
          <Home size="30" />
        </Link>
      </Item>
      <Item>
        <Link to="/movie">
          <Video size="30" />
        </Link>
      </Item>
      <Item>
        <Link to="/tv">
          <Tv size="30" />
        </Link>
      </Item>
      <ItemSearch>
        <Search size="30" />
        <input type="search" placeholder="Búsqueda..." />
      </ItemSearch>
    </Nav>
  );
};

export default BarraDeNav;
