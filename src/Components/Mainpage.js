import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// Hero Banner
const StyledHero = styled.div`
  background-image: url("./images/MVP-Home.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

const StyledHeroTitleContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  row-gap: 1vh;
  padding-bottom: 4vh;
`;

const StyledHeroButton = styled.button`
  display: flex;
  color: white;
  border: 0.2rem solid dodgerblue;
  border-radius: 20px;
  padding: 0.5px 10px;
  font-weight: bold;

  &:hover {
    background-color: dodgerblue;
    color: white;
    font-weight: bold;
    border: 0.2rem solid dodgerblue;
  }
`;

// Main Section
const StyledCityText = styled.div`
  text-align: center;
  padding-top: 5px;
  border: 1px solid red;
  background-color: lightblue;
`;
const StyledAllRestaurantsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 5vh auto;
  column-gap: 2vw;
  row-gap: 2vh;
  box-sizing: border-box;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledRestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  border: 0.3rem solid #eb455f;
  border-radius: 20px;
  @media (max-width: 720px) {
    width: 40%;
  }
  @media (max-width: 500px) {
    width: 60%;
  }
`;

const StyledRestaurantImage = styled.img`
  width: 100%;
  height: 3rem;
  object-fit: contain;
  animation: App-logo-spin infinite 20s linear;
`;

const StyledRestaurantTagsContainer = styled.div`
  display: flex;
  column-gap: 3vw;
`;

const StyledRestaurantName = styled.h5`
  font-size: 1rem;
`;

const StyledRestaurantInfoTexts = styled.p`
  font-size: 0.8rem;
`;

const StyledRestaurantTags = styled.p`
  color: black;
  font-style: "Barlow";
  padding: 5px 5px;
  margin-top: 10px;
  margin: 5px;
  font-size: 0.7rem;
  display: flex;
  flex-wrap: wrap;
`;

const StyledRestaurantButton = styled.button`
  color: black;
  border: 0.3rem solid #eb455f;
  border-radius: 20px;
  padding: 0.3vw 3vw;
  margin: 2vh 0;
  font-weight: bold;
  &:hover {
    background-color: green;
    color: white;
    font-weight: bold;
    border: 0.2rem solid black;
  }
`;

const StyledPizzaHutButton = styled.button`
  color: black;
  border: 0.3rem solid #eb455f;
  border-radius: 20px;
  padding: 0.3vw 3vw;
  margin: 2vh 0;
  font-weight: bold;
  &:hover {
    background-color: green;
    color: white;
    font-weight: bold;
    border: 0.2rem solid black;
  }
`;
export default function Mainpage() {
  return (
    <StyledMainPageContainer>
      <StyledHero>
        <StyledHeroTitleContainer>
          <Link to="/pizza" id="order-pizza">
            <StyledHeroButton data-cy="order-pizza-button">
              Order Pizza
            </StyledHeroButton>
          </Link>
        </StyledHeroTitleContainer>
      </StyledHero>

      <StyledCityText>Food Delivery in Los Angeles</StyledCityText>
      <StyledAllRestaurantsContainer>
        <StyledRestaurantContainer>
          <StyledRestaurantImage
            src="./images/mcdonalds.png"
            alt="placeholder image"
          />
          <StyledRestaurantName>McDonald's</StyledRestaurantName>
          <StyledRestaurantInfoTexts>
            $ - American - Fast Food - Burgers
          </StyledRestaurantInfoTexts>
          <StyledRestaurantTagsContainer>
            <StyledRestaurantTags>20-30 Min</StyledRestaurantTags>
            <StyledRestaurantTags>$5.99 Delivery Fee</StyledRestaurantTags>
          </StyledRestaurantTagsContainer>
          <Link to="/empty" id="empty">
            <StyledRestaurantButton>Go to Restaurant</StyledRestaurantButton>
          </Link>
        </StyledRestaurantContainer>

        <StyledRestaurantContainer>
          <StyledRestaurantImage
            src="./images/pizzahut.png"
            alt="placeholder image"
          />
          <StyledRestaurantName>PizzaHut</StyledRestaurantName>
          <StyledRestaurantInfoTexts>
            $$$ - Healthy - Salads - Pizza
          </StyledRestaurantInfoTexts>
          <StyledRestaurantTagsContainer>
            <StyledRestaurantTags>30-45 Min</StyledRestaurantTags>
            <StyledRestaurantTags>$4.99 Delivery Fee</StyledRestaurantTags>
          </StyledRestaurantTagsContainer>
          <Link to="/pizza" id="order-pizza">
            <StyledPizzaHutButton>Go to Restaurant</StyledPizzaHutButton>
          </Link>
        </StyledRestaurantContainer>

        <StyledRestaurantContainer>
          <StyledRestaurantImage
            src="./images/starbucks.png"
            alt="placeholder image"
          />
          <StyledRestaurantName>Starbucks</StyledRestaurantName>
          <StyledRestaurantInfoTexts>
            $$ - Cafe - Coffee & Tea - Breakfast and Brunch
          </StyledRestaurantInfoTexts>
          <StyledRestaurantTagsContainer>
            <StyledRestaurantTags>10-20 Min</StyledRestaurantTags>
            <StyledRestaurantTags>$3.99 Delivery Fee</StyledRestaurantTags>
          </StyledRestaurantTagsContainer>
          <Link to="/empty" id="empty">
            <StyledRestaurantButton>Go to Restaurant</StyledRestaurantButton>
          </Link>
        </StyledRestaurantContainer>

        <StyledRestaurantContainer>
          <StyledRestaurantImage
            src="./images/burgerking.png"
            alt="placeholder image"
          />
          <StyledRestaurantName>Burger King</StyledRestaurantName>
          <StyledRestaurantInfoTexts>
            $ - American - Fast Food - Burgers
          </StyledRestaurantInfoTexts>
          <StyledRestaurantTagsContainer>
            <StyledRestaurantTags>20-30 Min</StyledRestaurantTags>
            <StyledRestaurantTags>$5.99 Delivery Fee</StyledRestaurantTags>
          </StyledRestaurantTagsContainer>
          <Link to="/empty" id="empty">
            <StyledRestaurantButton>Go to Restaurant</StyledRestaurantButton>
          </Link>
        </StyledRestaurantContainer>

        <StyledRestaurantContainer>
          <StyledRestaurantImage
            src="./images/inannoutburger.png"
            alt="placeholder image"
          />
          <StyledRestaurantName>In-N-Out Burger</StyledRestaurantName>
          <StyledRestaurantInfoTexts>
            $ - American - Fast Food - Burgers
          </StyledRestaurantInfoTexts>
          <StyledRestaurantTagsContainer>
            <StyledRestaurantTags>30-45 Min</StyledRestaurantTags>
            <StyledRestaurantTags>$4.99 Delivery Fee</StyledRestaurantTags>
          </StyledRestaurantTagsContainer>
          <Link to="/empty" id="empty">
            <StyledRestaurantButton>Go to Restaurant</StyledRestaurantButton>
          </Link>
        </StyledRestaurantContainer>

        <StyledRestaurantContainer>
          <StyledRestaurantImage
            src="./images/sarkujapan.png"
            alt="placeholder image"
          />
          <StyledRestaurantName>Sarku Japan</StyledRestaurantName>
          <StyledRestaurantInfoTexts>
            $$$ - Healthy - Japanese Kitchen - Sushi
          </StyledRestaurantInfoTexts>
          <StyledRestaurantTagsContainer>
            <StyledRestaurantTags>30-45 Min</StyledRestaurantTags>
            <StyledRestaurantTags>$8.99 Delivery Fee</StyledRestaurantTags>
          </StyledRestaurantTagsContainer>
          <Link to="/empty" id="empty">
            <StyledRestaurantButton>Go to Restaurant</StyledRestaurantButton>
          </Link>
        </StyledRestaurantContainer>
      </StyledAllRestaurantsContainer>
    </StyledMainPageContainer>
  );
}
