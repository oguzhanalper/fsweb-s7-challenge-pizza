import React from "react";
import styled from "styled-components";

const StyledAdminPanelContainer = styled.div`
  margin-bottom: 65vh;
`;

const StyledTable = styled.table`
  width: 90%;
  border-spacing: 1.5rem;
  border: 0.1rem solid #eb455f;
  border-radius: 20px;
  margin: 0 auto;
`;

const StyledHeadingRow = styled.tr`
  border-bottom: 0.1rem solid #eb455f;
  color: #ce2829;
`;

const StyledColumn = styled.th`
  overflow-wrap: break-word;
  border-left: 0.1rem solid #eb455f;
`;

export default function Admin(props) {
  const { adminOrder, orderStatus, totalPrice } = props;
  return (
    <StyledAdminPanelContainer>
      <StyledTable>
        <StyledHeadingRow>
          <StyledColumn>Status</StyledColumn>
          <StyledColumn>Size</StyledColumn>
          <StyledColumn>Sauce</StyledColumn>
          <StyledColumn>Toppings</StyledColumn>
          <StyledColumn>Gluten Free Crust</StyledColumn>
          <StyledColumn>Notes</StyledColumn>
          <StyledColumn>Order Qty</StyledColumn>
          <StyledColumn>Total</StyledColumn>
          <StyledColumn>Name</StyledColumn>
          <StyledColumn>Address</StyledColumn>
        </StyledHeadingRow>
        {orderStatus ? (
          <tr>
            <StyledColumn>Active</StyledColumn>
            <StyledColumn>{adminOrder.sizeDropdown}</StyledColumn>
            <StyledColumn>{adminOrder.sauce}</StyledColumn>
            <StyledColumn>
              <ul>
                {adminOrder.selectedToppings.length > 0
                  ? adminOrder.selectedToppings.map((topping) => (
                      <li>{topping}</li>
                    ))
                  : "None"}
              </ul>
            </StyledColumn>
            <StyledColumn>
              {adminOrder.glutenFreeCrust ? "Yes" : "No"}
            </StyledColumn>
            <StyledColumn>
              {adminOrder.specialText ? adminOrder.specialText : "None"}
            </StyledColumn>
            <StyledColumn>{adminOrder.orderQuantity}</StyledColumn>
            <StyledColumn>${totalPrice}</StyledColumn>
            <StyledColumn>{adminOrder.name}</StyledColumn>
            <StyledColumn>{adminOrder.address}</StyledColumn>
          </tr>
        ) : (
          <h2>No Active Orders</h2>
        )}
      </StyledTable>
    </StyledAdminPanelContainer>
  );
}
