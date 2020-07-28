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
  padding: 20px 20px;
  margin: 0;
  background-color: rgb(35, 39, 42);
  a {
    text-decoration: none;
    color: rgb(220, 221, 222);
    padding: 12px 20px;
    align-items: center;
    justify-content: center;
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

const Item = styled.p`
  margin: 0;
`;

const ItemSearch = styled.li`
  margin: 0;
  display: flex;
  padding-left: 10px;
  align-items: center;
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
      <Item>
        <NavLink to="/" exact activeClassName="current">
          <Home size="33" />
        </NavLink>
      </Item>
      <Item>
        <NavLink to="/movie" exact activeClassName="current">
          <Video size="33" />
        </NavLink>
      </Item>
      <Item>
        <NavLink to="/tv" exact activeClassName="current">
          <Tv size="33" />
        </NavLink>
      </Item>
      <ItemSearch>
        <Search size="33" />
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
