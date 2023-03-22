import React from "react";
import styled from "styled-components";

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledMainTitle = styled.h2`
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-decoration: underline;
  background-color: #faf7f2;
`;

const StyledHeadingContact = styled.p`
  font-size: 1rem;
  text-align: center;
  background-color: #faf7f2;
  margin-bottom: 1rem;
  font-style: italic;
`;
const StyledTelephoneNumber = styled.span`
  font-style: italic;
  text-align: center;
  background-color: dodgerblue;
  margin-bottom: 10rem;
`;

function Contact() {
  return (
    <StyledContactContainer>
      <StyledMainTitle>CONTACT US</StyledMainTitle>
      <StyledHeadingContact>
        PIZZA DELIVERY & CARRYOUT IN LOS ANGELES,CA
      </StyledHeadingContact>
      <StyledHeadingContact>
        1457 Florence Ave. #109 Los Angeles, CA 90001
      </StyledHeadingContact>
      <StyledTelephoneNumber>(323) 582-9200</StyledTelephoneNumber>
    </StyledContactContainer>
  );
}

export default Contact;
// animation: App-logo-spin infinite 5s linear;
