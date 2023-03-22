import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFormPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 680px;
  margin: auto;

  border: 0.3rem solid green;
  border-radius: 25px;
  @media (max-width: 680px) {
    width: 90%;
  }
`;

const StyledTopTitleContainer = styled.div`
  display: flex;
  font-family: "Barlow";
  justify-content: center;
  padding-bottom: 5px;
  font-weight: bold;
  background-color: green;
  border-radius: 20px;
`;

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  background-image: url("./images/pizza.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledOrderSection = styled.div`
  display: flex;
  font-family: "Quattrocento Sans";
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const StyledOrderSectionHeading = styled.div`
  background-color: #faf7f2;
  margin: 2vh 0;
  text-align: center;
`;

const StyledOrderSectionHeadingTitle = styled.p`
  font-weight: bold;
`;

const StyledOrderSectionHeadingSubTitle = styled.p`
  font-size: 1rem;
`;

const StyledToppingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: auto;
  margin: 2rem;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const StyledToppingsContainerSelection = styled.div`
  width: 35%;

  @media (max-width: 680px) {
    width: 90%;
  }
`;

const StyledSpecialInstructionsContainer = styled.label`
  display: flex;
  justify-content: center;
`;
const StyledSpecialInstructionsInput = styled.input`
  width: 90%;
  height: 5vh;
  margin: auto 0;
  @media (max-width: 680px) {
    width: 30vw;
    height: 20vh;
  }
`;

const StyledPersonalDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #faf7f2;
`;

const StyledPersonalDetailsInput = styled.input`
  width: 90%;
  height: 7vh;
  margin: 3vh auto;
  @media (max-width: 600px) {
    width: 40vw;
  }
`;

const StyledPlaceOrderContainer = styled.label`
  display: flex;
  justify-content: space-evenly;
  border-top: 0.2rem solid black;
  height: 15vh;
  margin: auto;
  align-items: center;
  padding: 1.5rem 0;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }
`;

const StyledPlaceOrderInput = styled.input`
  padding: 0.1rem;
  color: black;
  border: 0.2rem solid #292929;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  @media (max-width: 750px) {
    margin-top: 10vh;
  }
`;

const StyledPlaceOrderButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1vw;
  color: black;
  border: 0.3rem solid #ce2829;
  border-radius: 20px;
  padding: 0.5vw 4vw;
  font-weight: bold;
  &:hover {
    background-color: green;
    color: white;
    font-weight: bold;
    border: 0.3rem solid black;
  }
`;

const StyledOrderButtonTexts = styled.p`
  text-decoration: none;
`;

const StyledErrorText = styled.p`
  color: #ce2829;
  margin-bottom: 3vh;
  font-size: 1rem;
  text-align: center;
`;

const StyledOrderSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const StyledOrderSuccessButton = styled.button`
  color: black;
  border: 0.3rem solid #eb455f;
  border-radius: 20px;
  padding: 0.5vw 4vw;
  font-weight: bold;
  &:hover {
    background-color: #eb455f;
    color: white;
    font-weight: bold;
    border: 0.3rem solid black;
  }
`;

const StyledSize = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledSizeInput = styled.select`
  width: 50%;
  margin: 0 auto;
  border: 0.3rem solid #ce2829;
  border-radius: 20px;
`;

const StyledSauceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  margin: 0 auto;
  @media (max-width: 903px) {
    width: 45%;
  }
  @media (max-width: 760px) {
    width: 40%;
  }
`;

const StyledSauceOption = styled.div`
  display: flex;
`;

const StyledGlutenFree = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledNewOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2vh 0;
`;

const StyledNewOrderButton = styled.button`
  color: white;
  border: 0.3rem solid black;
  border-radius: 20px;
  padding: 0.5vw 4vw;
  font-weight: bold;
  background-color: #eb455f;
  &:hover {
    color: black;
    background-color: white;
    font-weight: bold;
    border: 0.3rem solid #eb455f;
  }
`;

const StyledClearFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  background-color: #faf7f2;
`;

const StyledClearFormButton = styled.button`
  display: flex;

  color: black;
  font-weight: bold;

  &:hover {
    text-decoration: none;
    color: #ce2829;
  }
`;

const StyledQtyErrorContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Form(props) {
  const {
    handleChange,
    formData,
    orderButtonDisabled,
    toppings,
    handleTopping,
    orderFormErrors,
    handleSubmit,
    adminOrder,
    sum,
    handleClear,
  } = props;

  return (
    <StyledFormPageContainer>
      <StyledTopTitleContainer>
        <h4>Build Your Own Pizza</h4>
      </StyledTopTitleContainer>
      <StyledHero></StyledHero>
      {!adminOrder && (
        <StyledOrderSection>
          <h2>Build Your Own Pizza</h2>

          <form
            id="pizza-form"
            onSubmit={handleSubmit}
            style={{ width: "100%" }}
          >
            <StyledSize htmlFor="size">
              <StyledOrderSectionHeading>
                <StyledOrderSectionHeadingTitle>
                  Choice of Size
                </StyledOrderSectionHeadingTitle>
                <StyledOrderSectionHeadingSubTitle>
                  Required
                </StyledOrderSectionHeadingSubTitle>
              </StyledOrderSectionHeading>
              <StyledSizeInput
                id="size-dropdown"
                name="sizeDropdown"
                value={formData.sizeDropdown}
                onChange={handleChange}
                data-cy="select-size"
              >
                <option></option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </StyledSizeInput>
            </StyledSize>
            <StyledErrorText>{orderFormErrors.sizeDropdown}</StyledErrorText>
            <StyledOrderSectionHeading>
              <StyledOrderSectionHeadingTitle>
                Choice of Sauce
              </StyledOrderSectionHeadingTitle>
              <StyledOrderSectionHeadingSubTitle>
                Required
              </StyledOrderSectionHeadingSubTitle>
            </StyledOrderSectionHeading>
            <StyledSauceContainer>
              <StyledSauceOption>
                <input
                  type="radio"
                  id="original-red"
                  name="sauce"
                  onChange={handleChange}
                  checked={formData.sauce === "original-red"}
                  value="original-red"
                ></input>
                <label htmlFor="original-red">Original Red</label>
              </StyledSauceOption>
              <br></br>
              <StyledSauceOption>
                <input
                  type="radio"
                  id="garlic-ranch"
                  name="sauce"
                  onChange={handleChange}
                  value="garlic-ranch"
                  checked={formData.sauce === "garlic-ranch"}
                ></input>
                <label htmlFor="garlic-ranch">Garlic Ranch</label>
              </StyledSauceOption>
              <br></br>
              <StyledSauceOption>
                <input
                  type="radio"
                  id="bbq-sauce"
                  name="sauce"
                  onChange={handleChange}
                  value="bbq-sauce"
                  checked={formData.sauce === "bbq-sauce"}
                ></input>
                <label htmlFor="bbq-sauce">BBQ Sauce</label>
              </StyledSauceOption>
              <br></br>
              <StyledSauceOption>
                <input
                  type="radio"
                  id="spinach-alfredo"
                  name="sauce"
                  onChange={handleChange}
                  value="spinach-alfredo"
                  checked={formData.sauce === "spinach-alfredo"}
                ></input>
                <label htmlFor="spinach-alfredo">Spinach Alfredo</label>
              </StyledSauceOption>
            </StyledSauceContainer>
            <StyledOrderSectionHeading>
              <StyledOrderSectionHeadingTitle>
                Add Toppings
              </StyledOrderSectionHeadingTitle>
              <StyledOrderSectionHeadingSubTitle>
                Choose up to 10
              </StyledOrderSectionHeadingSubTitle>
            </StyledOrderSectionHeading>
            <StyledErrorText>
              {orderFormErrors.selectedToppings}
            </StyledErrorText>
            <StyledToppingsContainer>
              <StyledToppingsContainerSelection>
                <label>
                  <input
                    type="checkbox"
                    id="pepperoni"
                    name="pepperoni"
                    onChange={handleTopping}
                    checked={toppings.pepperoni}
                    value="pepperoni"
                  />
                  Pepperoni
                </label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <label>
                  <input
                    type="checkbox"
                    id="sausage"
                    name="sausage"
                    onChange={handleTopping}
                    checked={toppings.sausage}
                    value="sausage"
                  />
                  Sausage
                </label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <label>
                  <input
                    type="checkbox"
                    id="bacon"
                    name="bacon"
                    onChange={handleTopping}
                    checked={toppings.bacon}
                    value="bacon"
                  />
                  Bacon
                </label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <label>
                  <input
                    type="checkbox"
                    id="ham"
                    name="ham"
                    onChange={handleTopping}
                    checked={toppings.ham}
                    value="ham"
                  />
                  Ham
                </label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <label>
                  <input
                    type="checkbox"
                    id="onions"
                    name="onions"
                    onChange={handleTopping}
                    checked={toppings.onions}
                    value="onions"
                  />
                  Onions
                </label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <label>
                  <input
                    type="checkbox"
                    id="green-pepper"
                    name="greenPepper"
                    onChange={handleTopping}
                    checked={toppings.greenPepper}
                    value="green-pepper"
                  />
                  Green Pepper
                </label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <label>
                  <input
                    type="checkbox"
                    id="diced-tomatos"
                    name="dicedTomatos"
                    onChange={handleTopping}
                    checked={toppings.dicedTomatos}
                    value="diced-tomatos"
                  />
                  Diced Tomatos
                </label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <label>
                  <input
                    type="checkbox"
                    id="black-olives"
                    name="blackOlives"
                    onChange={handleTopping}
                    checked={toppings.blackOlives}
                    value="black-olives"
                  />
                  Black Olives
                </label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <label>
                  <input
                    type="checkbox"
                    id="roasted-garlic"
                    name="roastedGarlic"
                    onChange={handleTopping}
                    checked={toppings.roastedGarlic}
                    value="roasted-garlic"
                  />
                  Roasted Garlic
                </label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <label>
                  <input
                    type="checkbox"
                    id="three-cheese"
                    name="threeCheese"
                    onChange={handleTopping}
                    checked={toppings.threeCheese}
                    value="three-cheese"
                  />
                  Three Cheese
                </label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <label>
                  <input
                    type="checkbox"
                    id="pineapple"
                    name="pineapple"
                    onChange={handleTopping}
                    checked={toppings.pineapple}
                    value="pineapple"
                  />
                  Pineapple
                </label>
              </StyledToppingsContainerSelection>
              <StyledToppingsContainerSelection>
                <label>
                  <input
                    type="checkbox"
                    id="extra-cheese"
                    name="extraCheese"
                    onChange={handleTopping}
                    checked={toppings.extraCheese}
                    value="extra-cheese"
                  />
                  Extra Cheese
                </label>
              </StyledToppingsContainerSelection>
            </StyledToppingsContainer>
            <StyledOrderSectionHeading>
              <StyledOrderSectionHeadingTitle>
                Choice of Substitute
              </StyledOrderSectionHeadingTitle>
              <StyledOrderSectionHeadingSubTitle>
                $1.00 per pizza
              </StyledOrderSectionHeadingSubTitle>
            </StyledOrderSectionHeading>
            <StyledGlutenFree>
              <input
                type="checkbox"
                id="gluten-free-crust"
                name="glutenFreeCrust"
                checked={formData.glutenFreeCrust}
                onChange={handleChange}
                data-cy="gluten-free-crust"
              />
              <label htmlFor="gluten-free-crust">
                Gluten Free Crust (+ $1.00)
              </label>
            </StyledGlutenFree>
            <StyledOrderSectionHeading>
              <StyledOrderSectionHeadingTitle>
                Special Instructions
              </StyledOrderSectionHeadingTitle>
            </StyledOrderSectionHeading>
            <StyledSpecialInstructionsContainer>
              <StyledSpecialInstructionsInput
                type="text"
                placeholder="Anything else you'd like to add?"
                id="special-text"
                name="specialText"
                value={formData.specialText}
                onChange={handleChange}
                data-cy="special-text"
              />
            </StyledSpecialInstructionsContainer>
            <StyledErrorText>{orderFormErrors.specialText}</StyledErrorText>
            <StyledOrderSectionHeading>
              <StyledOrderSectionHeadingTitle>
                Delivery Details
              </StyledOrderSectionHeadingTitle>
              <StyledOrderSectionHeadingSubTitle>
                Required
              </StyledOrderSectionHeadingSubTitle>
            </StyledOrderSectionHeading>
            <StyledPersonalDetailsContainer>
              <label htmlFor="name">
                Full Name: <br></br>
                <StyledPersonalDetailsInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name.."
                  value={formData.name}
                  onChange={handleChange}
                  data-cy="name"
                />
              </label>
              <StyledErrorText>{orderFormErrors.name}</StyledErrorText>
              <label htmlFor="address">
                Address:<br></br>
                <StyledPersonalDetailsInput
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Xyz Street, Building no: 123, City, Postcode"
                  value={formData.address}
                  onChange={handleChange}
                  data-cy="address"
                />
              </label>
              <StyledErrorText>{orderFormErrors.address}</StyledErrorText>
            </StyledPersonalDetailsContainer>
            <StyledPlaceOrderContainer>
              <StyledPlaceOrderInput
                type="number"
                id="order-quantity"
                name="orderQuantity"
                value={formData.orderQuantity}
                onChange={handleChange}
                min="1"
                data-cy="order-quantity"
              />

              <StyledPlaceOrderButton
                id="order-button"
                disabled={orderButtonDisabled}
                data-cy="order-button"
              >
                <StyledOrderButtonTexts>Place Order</StyledOrderButtonTexts>
                <StyledOrderButtonTexts>${sum}</StyledOrderButtonTexts>
              </StyledPlaceOrderButton>
            </StyledPlaceOrderContainer>

            <StyledQtyErrorContainer>
              <StyledErrorText>{orderFormErrors.orderQuantity}</StyledErrorText>
            </StyledQtyErrorContainer>
            <StyledClearFormContainer>
              <StyledClearFormButton onClick={handleClear}>
                Click here to clear form
              </StyledClearFormButton>
            </StyledClearFormContainer>
          </form>
        </StyledOrderSection>
      )}
      {adminOrder && (
        <StyledOrderSuccessContainer>
          <h2 data-cy="order-success-message">
            Order was placed successfully!
          </h2>
          <p>You may now track your order details</p>
          <Link
            to="/basket"
            style={{
              textDecoration: "none",
              width: "50%",
              padding: "0.5rem",
              margin: "2vh 0",
            }}
          >
            <StyledOrderSuccessButton data-cy="order-success-button">
              See Details
            </StyledOrderSuccessButton>
          </Link>
        </StyledOrderSuccessContainer>
      )}
      {adminOrder && (
        <StyledNewOrderContainer>
          <StyledNewOrderButton
            data-cy="place-new-order-button"
            onClick={() => window.location.reload(false)}
          >
            New Order
          </StyledNewOrderButton>
        </StyledNewOrderContainer>
      )}
    </StyledFormPageContainer>
  );
}
