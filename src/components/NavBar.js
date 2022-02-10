import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Home } from "@styled-icons/feather/Home";
import { Video } from "@styled-icons/feather/Video";
import { Tv } from "@styled-icons/feather/Tv";
import { Search } from "@styled-icons/feather/Search";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  background-color: rgb(35, 39, 42);
  @media (max-width: 600px) {
    padding: 10px 20px;
  }
  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
    margin: 12px 18px;
    align-items: center;
    justify-content: center;
    width: 30px;

    @media (max-width: 600px) {
      margin: 10px;
      width: 60px;
      height: 30px;
    }
  }
  a.current {
    color: rgb(33, 150, 243);
  }
  input {
    border: none;
    background-color: rgb(35, 39, 42);
    font-size: 20px;
    padding: 10px 30px 10px 4px;
    margin: 0;
    color: rgb(220, 221, 222);
  }
`;

const HomeIcon = styled(Home)`
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const VideoIcon = styled(Video)`
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const TvIcon = styled(Tv)`
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const SearchIcon = styled(Search)`
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const ItemSearch = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 20em;
  }
`;

const NavBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/multi/${search}/page/1`);
    setSearch("");
  };

  return (
    <Nav>
      <NavLink to="/" exact activeClassName="current">
        <HomeIcon />
      </NavLink>
      <NavLink to="/movie" exact activeClassName="current">
        <VideoIcon />
      </NavLink>
      <NavLink to="/tv" exact activeClassName="current">
        <TvIcon />
      </NavLink>

      <ItemSearch>
        <NavLink to="">
          <SearchIcon />
        </NavLink>

        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="search"
            placeholder="Search..."
            value={search}
          />
        </form>
      </ItemSearch>
    </Nav>
  );
};

export default NavBar;
