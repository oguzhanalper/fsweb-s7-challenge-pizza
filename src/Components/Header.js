import React from "react";
import styled from "styled-components";
import { Link, NavLink, Switch } from "react-router-dom";
import "./../App.css";

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding-left: 5rem;
`;

const StyledHeaderLogo = styled.h2`
  color: green;
  font-size: 1.8rem;
  text-decoration: underline white;
  margin-top: 1rem;
  :hover {
    color: #ce2829;
    font-family: "Satisfy", "cursive";
  }
`;

const StyledHeaderLinksContainer = styled.div`
  margin-top: 2rem;

  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin: 2rem 0;
  }
`;

const StyledHeaderLinks = styled.p`
  /* color: black;
  border: 0.3rem solid #eb455f;
  border-radius: 20px;
  padding: 0.5vw 4vw;
  font-weight: bold;
  text-decoration: underline white;
  &:hover {
    background-color: #eb455f;
    color: white;
    font-weight: bold;
    border: 0.3rem solid black;
    text-decoration: underline #eb455f;
  } */
  @media (max-width: 720px) {
    font-size: 1rem;
  }
  @media (max-width: 630px) {
    border: 0.1rem solid #eb455f;
  }
  @media (max-width: 300px) {
    border: 0.1rem solid #eb455f;
    font-size: 0.7rem;
    padding: 0 1rem;
    min-width: 30vw;
    text-align: center;
  }
`;

export default function Header() {
  return (
    <StyledHeaderContainer>
      <Link to="/">
        <StyledHeaderLogo>Tech Food</StyledHeaderLogo>
      </Link>
      <StyledHeaderLinksContainer>
        <Switch>
          <nav className="border border-solid bg-green-500 rounded-md mb-5 flex gap-5">
            <NavLink
              exact
              to="/"
              className="nav-link text-black hover:text-white ml-5"
              activeClassName="selected"
            >
              Home
            </NavLink>
            <NavLink
              to="/pizza"
              className="nav-link bg-red-500 text-black hover:text-white rounded-lg"
              activeClassName="selected"
            >
              My Order
            </NavLink>
            <NavLink
              to="/basket"
              className="nav-link  bg-green-500 text-black hover:text-white mr-5"
              activeClassName="selected"
            >
              Basket
            </NavLink>
          </nav>
        </Switch>
      </StyledHeaderLinksContainer>
    </StyledHeaderContainer>
  );
}
