import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  border: 0.3rem solid green;
  border-radius: 20px;
  margin-bottom: 1rem;
  align-items: center;
`;

const StyledTopTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledOrderStatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2vw;
  margin-bottom: 4vh;
`;

const StyledOrderStatusPending = styled.p`
  padding: 0.5rem;
  background-color: #ce2829;
  color: white;
  font-weight: bold;
  border-radius: 20px;
`;
const StyledOrderStatusConfirmed = styled.p`
  padding: 0.5rem;
  background-color: #ce2829;
  color: white;
  font-weight: bold;
  border-radius: 20px;
`;

const StyledOrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  font-weight: bold;
  text-transform: capitalize;
`;

const StyledOrderDetailsHeadings = styled.p`
  font-weight: bold;
  color: red;
`;

const StyledOrderSection = styled.div`
  display: flex;
  column-gap: 1rem;
`;

const StyledMainOrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding-bottom: 1rem;
`;

const StyledPlaceOrderButton = styled.button`
  color: black;
  border: 0.3rem solid #ce2829;
  border-radius: 30px;
  padding: 0.5rem 0.5rem;
  font-weight: bold;
  &:hover {
    background-color: green;
    color: white;
    font-weight: bold;
    border: 0.2rem solid black;
  }
`;

const StyledNoOrdersYetContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 1rem;
`;

const StyledNewOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const StyledNewOrderButton = styled.button`
  color: black;
  border: 0.2rem solid #ce2829;
  border-radius: 20px;
  padding: 0.5rem 4rem;
  font-weight: bold;
  background-color: #ce2829;
  &:hover {
    color: black;
    background-color: green;
    font-weight: bold;
    border: 0.2rem solid green;
  }
`;
export default function Basket(props) {
  const { adminOrder, orderStatus, totalPrice } = props;
  return (
    <StyledBasketContainer>
      <StyledTopTitleContainer>
        <h2>Order Details</h2>
      </StyledTopTitleContainer>
      <StyledMainOrderDetailsContainer>
        <StyledOrderStatusContainer>
          {" "}
          <h4>Order status: </h4>
          {!orderStatus && (
            <>
              <StyledOrderStatusPending>Pending</StyledOrderStatusPending>
            </>
          )}
          {orderStatus && (
            <StyledOrderStatusConfirmed>Preparing</StyledOrderStatusConfirmed>
          )}
        </StyledOrderStatusContainer>
        {!orderStatus && (
          <StyledNoOrdersYetContainer>
            <p>You haven't placed an order yet.</p>
            <Link to="/pizza">
              <StyledPlaceOrderButton data-cy="order-now-button">
                Order Now
              </StyledPlaceOrderButton>
            </Link>
          </StyledNoOrdersYetContainer>
        )}
        {adminOrder && (
          <StyledOrderDetailsContainer>
            <StyledOrderSection>
              <StyledOrderDetailsHeadings>Size:</StyledOrderDetailsHeadings>
              <p>{adminOrder.sizeDropdown}</p>
            </StyledOrderSection>
            <StyledOrderSection>
              <StyledOrderDetailsHeadings>Sauce: </StyledOrderDetailsHeadings>
              <p> {adminOrder.sauce}</p>
            </StyledOrderSection>
            <StyledOrderDetailsHeadings>Toppings:</StyledOrderDetailsHeadings>
            <ul>
              {adminOrder.selectedToppings.map((topping) => (
                <li>{topping}</li>
              ))}
            </ul>

            {adminOrder.glutenFreeCrust ? (
              <StyledOrderSection>
                <StyledOrderDetailsHeadings>
                  Gluten Free Crust:
                </StyledOrderDetailsHeadings>
                <p>Yes</p>
              </StyledOrderSection>
            ) : (
              <StyledOrderSection>
                <StyledOrderDetailsHeadings>
                  Gluten Free Crust:
                </StyledOrderDetailsHeadings>
                <p>-</p>
              </StyledOrderSection>
            )}
            <StyledOrderSection>
              <StyledOrderDetailsHeadings>
                Special Instructions:{" "}
              </StyledOrderDetailsHeadings>
              <p>{adminOrder.specialText ? adminOrder.specialText : "None"}</p>
            </StyledOrderSection>
            <StyledOrderSection>
              <StyledOrderDetailsHeadings>
                Order Quantity:
              </StyledOrderDetailsHeadings>
              <p> {adminOrder.orderQuantity}</p>
            </StyledOrderSection>
            <StyledOrderSection>
              <StyledOrderDetailsHeadings>Total: </StyledOrderDetailsHeadings>
              <p>${totalPrice}</p>
            </StyledOrderSection>
          </StyledOrderDetailsContainer>
        )}
        {adminOrder && (
          <StyledNewOrderContainer>
            <Link to="/pizza">
              <StyledNewOrderButton data-cy="place-new-order-button">
                New Order
              </StyledNewOrderButton>
            </Link>
          </StyledNewOrderContainer>
        )}
      </StyledMainOrderDetailsContainer>
    </StyledBasketContainer>
  );
}
