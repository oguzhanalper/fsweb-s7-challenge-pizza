import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  column-gap: 5rem;
  align-items: center;
  background-color: #ce2829;
  font-family: "Satisfy";
  position: fixed;
  bottom: 0;
  width: 100%;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledFooterLogo = styled.h2`
  color: white;
  font-family: "Barlow";
  font-size: 1.3rem;
`;

const StyledFooterLinksContainer = styled.div`
  display: flex;
  column-gap: 2vw;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    row-gap: 2vh;
  }
`;

const StyledFooterLinks = styled.p`
  color: white;
  border: 0.1rem solid green;
  border-radius: 20px;
  padding: 0.5vw 4vw;
  font-weight: bold;
  text-decoration: none;
  font-family: "Satisfy", "cursive";

  &:hover {
    background-color: white;
    color: red;
    font-weight: bold;
    border: 0.2rem solid white;
    font-family: "Satisfy", "cursive";
  }
`;
export default function Footer() {
  return (
    <StyledFooterContainer>
      <StyledFooterLogo>Tech Food</StyledFooterLogo>
      <StyledFooterLinksContainer>
        <StyledFooterLinks>FAQ</StyledFooterLinks>
        <Link to="/contact">
          <StyledFooterLinks>Contact Us</StyledFooterLinks>
        </Link>
        <Link to="/admin">
          <StyledFooterLinks>Admin</StyledFooterLinks>
        </Link>
      </StyledFooterLinksContainer>
    </StyledFooterContainer>
  );
}
