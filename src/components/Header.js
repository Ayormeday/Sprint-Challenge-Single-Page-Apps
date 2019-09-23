import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <Header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavStyle>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/Location">Location</Link>
        <Link to="/Episode">Episode</Link>
      </NavStyle>
    </Header>
  );
}
