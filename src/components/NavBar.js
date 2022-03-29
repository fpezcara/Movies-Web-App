import React, { useState, useRef } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Home } from "@styled-icons/feather/Home";
import { Video } from "@styled-icons/feather/Video";
import { Tv } from "@styled-icons/feather/Tv";
import { Search } from "@styled-icons/feather/Search";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: rgb(35, 39, 42);
  width: 100%;

  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
    width: 3em;
    padding: 0.5em;
    text-align: center;
  }
  a.current {
    color: rgb(33, 150, 243);
  }

  a:hover {
    color: rgb(33, 150, 243);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 1.9%;
    min-width: 13em;
    padding: 0.2em;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    div {
      margin-left: 1%;
    }
  }

  @media only screen and (max-width: 600px) {
    div {
      min-width: 5em;
    }
  }
`;

const IconWrapper = styled.div`
  padding: 0.2em;
`;
const Icon = `
  width: 1.8em;
  @media only screen and (max-width: 600px) {
    width: 1em;
    }

`;
const HomeIcon = styled(Home)`
  ${Icon}
`;

const VideoIcon = styled(Video)`
  width: 2em;
  @media only screen and (max-width: 600px) {
    width: 1.2em;
  }
`;

const TvIcon = styled(Tv)`
  ${Icon}
`;

const SearchWrapper = styled.div`
  width: 24em;
  @media only screen and (max-width: 768px) {
    margin-left: 1.3em;
  }
  @media only screen and (max-width: 600px) {
    width: 14em;
    padding: 0.3em;
    margin-left: 0.3em;
  }
`;
const SearchIcon = styled(Search)`
  ${Icon}
  cursor: pointer;

  :hover {
    color: rgb(33, 150, 243);
  }
  @media only screen and (max-width: 768px) {
    margin-left: 0.5em;
    margin-right: 1.2em;
  }
  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`;

const InputSearch = styled.input`
  width: 18em;
  border: none;
  background-color: rgb(35, 39, 42);
  font-size: 1em;
  padding: 0.5em 0.5em;
  margin-left: 0.1em;
  color: rgb(220, 221, 222);
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    width: 10em;
    margin-left: 0.1em;
  }
`;

const NavBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const searchInputRef = useRef(null);

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
      <div>
        <IconWrapper>
          <NavLink to="/" exact activeClassName="current">
            <HomeIcon />
          </NavLink>
          <NavLink to="/movie" exact activeClassName="current">
            <VideoIcon />
          </NavLink>
          <NavLink to="/tv" exact activeClassName="current">
            <TvIcon />
          </NavLink>
        </IconWrapper>

        <SearchWrapper>
          <SearchIcon
            onClick={() => {
              searchInputRef.current.focus();
            }}
          />

          <form onSubmit={handleSubmit}>
            <InputSearch
              onChange={handleChange}
              type="search"
              placeholder="Search..."
              value={search}
              autoFocus
              ref={searchInputRef}
            />
          </form>
        </SearchWrapper>
      </div>
    </Nav>
  );
};

export default NavBar;
