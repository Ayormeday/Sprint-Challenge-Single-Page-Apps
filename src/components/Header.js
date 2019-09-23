import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const HeaderStyle = styled.header `

`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to="/">Home</Link>
      <Link to= "/characters">Characters</Link>
      <Link to= "/Location">Location</Link>
      <Link to="/Episode">Episode</Link>
    </header>
  );
}
