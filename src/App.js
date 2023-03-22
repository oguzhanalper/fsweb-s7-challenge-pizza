import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";
import Header from "./Components/Header";
import Mainpage from "./Components/Mainpage";
import Form from "./Components/Form";
import { orderFormSchema } from "./validation/OrderFormValidation";
import Basket from "./Components/Basket";
import Routing from "./Components/Routing";
import Admin from "./Components/Admin";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

/* Using styled-components 
    //?REnkler
 Sarı #FDC913, Açık Gri: #5F5F5F, Koyu Gri #292929, Kırmızı #CE2829, Bej: #FAF7F2 
    //?Fontlar
 Barlow Quattrocento Satisfy     */

const StyledSuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2em;
  margin-bottom: 2em;
`;

const StyledSuccessText = styled.p`
  padding: 0.5em;
  color: white;
  font-weight: bold;
  border-radius: 17px;
  background-color: #5f5f5f;
`;

const StyledBasketSpan = styled.span`
  color: #ce2829;
  background-color: white;
  border-radius: 20px;
  padding: 0.5rem;
  margin: 0.5rem;
  font-weight: bold;
`;

//* ---------------App section for states ---------------
const App = () => {
  //* ORDER DATA

  const [formData, setFormData] = useState({
    sizeDropdown: "",
    sauce: "",
    selectedToppings: [],
    glutenFreeCrust: "",
    specialText: "",
    name: "",
    address: "",
    orderQuantity: "1",
  });

  //* ORDER for ADMİN

  const [adminOrder, setAdminOrder] = useState("");

  //* ORDER BUTTON
  const [orderButtonDisabled, setOrderButtonDisabled] = useState(true);

  //TODO Create a Form.js file && define onChange button with handleTopping function according to event listener
  const [toppings, setToppings] = useState({
    pepperoni: true,
    sausage: false,
    bacon: false,
    ham: false,
    onions: false,
    dicedTomatos: false,
    greenPepper: false,
    blackOlives: false,
    roastedGarlic: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
  });

  //* ERRORS for Form

  const [orderFormErrors, setOrderFormErrors] = useState({
    sizeDropdown: "",
    sauce: "",
    selectedToppings: null,
    glutenFreeCrust: "",
    specialText: "",
    name: "",
    address: "",
    orderQuantity: null,
  });

  //* ORDER STATUS

  const [orderStatus, setOrderStatus] = useState(false);

  //*ORDER VALUE (pizza price* order quantity)

  const [sum, setSum] = useState(9.99);

  //TODO Create Total Order Price with Submit Button

  const [totalPrice, setTotalPrice] = useState(null);

  //*TOPPING ARRAYS

  const [toppingArray, setToppingArray] = useState([]);

  //?------------------------- HANDLE CHANGES -------------------------

  //*ORDER FORM

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue = value;
    if (type === "checkbox") {
      newValue = checked;
    }
    //TODO Errors
    checkOrderFormErrors(name, newValue);
    setFormData({ ...formData, [name]: newValue });
  };

  //* Updating false/true statement for toppings

  const handleTopping = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue = value;
    if (type === "checkbox") {
      newValue = checked;
    }

    setToppings({ ...toppings, [name]: newValue });
  };

  //* Add or remove to toppingArray from true toppings objects
  const handleToppingArray = () => {
    for (let i = 0; i < Object.keys(toppings).length; i++) {
      if (
        toppings[Object.keys(toppings)[i]] === true &&
        toppingArray.includes(Object.keys(toppings)[i]) === false
      ) {
        let newArray = [Object.keys(toppings)[i]];
        setToppingArray([...toppingArray, ...newArray]);
      } else if (
        toppings[Object.keys(toppings)[i]] === false &&
        toppingArray.includes(Object.keys(toppings)[i]) === true
      ) {
        let newArray = [...toppingArray];
        setToppingArray(
          newArray.filter((topping) => {
            return topping !== Object.keys(toppings)[i];
          })
        );
      }
    }
  };

  //* Toppings Array's length send to selectedToppings in FormData ----
  const handleSelectedToppingsArray = () => {
    setFormData({
      ...formData,
      selectedToppings: toppingArray,
    });
  };
  //* Order Value

  const handleOrderQuantitySum = () => {
    formData.glutenFreeCrust !== true
      ? setSum(formData.orderQuantity * 9.99)
      : setSum(formData.orderQuantity * 9.99 + formData.orderQuantity * 1);
  };
  //* For Clear Order Form

  const handleClear = () => {
    setFormData({
      sizeDropdown: "",
      sauce: "",
      selectedToppings: [],
      glutenFreeCrust: "",
      specialText: "",
      name: "",
      address: "",
      orderQuantity: "1",
    });
    setToppings({
      pepperoni: false,
      sausage: false,
      bacon: false,
      ham: false,
      onions: false,
      greenPepper: false,
      dicedTomatos: false,
      blackOlives: false,
      roastedGarlic: false,
      threeCheese: false,
      pineapple: false,
      extraCheese: false,
    });
  };

  //* Submit Order Form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderButtonDisabled === false) {
      axios
        .post("https://reqres.in/api/users", formData)
        .then((response) => {
          setAdminOrder(response.data);
          setTotalPrice(sum);
          setOrderStatus(true);
          setFormData({
            sizeDropdown: "",
            sauce: "",
            selectedToppings: null,
            glutenFreeCrust: "",
            specialText: "",
            name: "",
            address: "",
            orderQuantity: null,
          });
          setTimeout(() => {
            document.getElementById("success-message").textContent = "";
          }, 2500);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //? ------------------USE EFFECT------------------------

  //* Adding or removing to toppingArray when the changing in toppings

  useEffect(handleToppingArray, [toppings]);

  //* When the any change in Topping Array to send selectedToppings in formData
  useEffect(handleSelectedToppingsArray, [toppingArray]);

  useEffect(() => {
    orderFormSchema
      .isValid(formData)
      .then((result) => setOrderButtonDisabled(!result));
  }, [formData]);

  useEffect(handleOrderQuantitySum, [formData]);

  //*Validation Errors
  function checkOrderFormErrors(name, value) {
    Yup.reach(orderFormSchema, name)
      .validate(value)
      .then(() => {
        setOrderFormErrors({
          ...orderFormErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setOrderFormErrors({
          ...orderFormErrors,
          [name]: err.errors[0],
        });
      });
  }
  //* UI ----------------------
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Mainpage />
        </Route>

        <Route path="/pizza">
          <Form
            handleChange={handleChange}
            formData={formData}
            orderButtonDisabled={orderButtonDisabled}
            toppings={toppings}
            handleTopping={handleTopping}
            orderFormErrors={orderFormErrors}
            handleSubmit={handleSubmit}
            adminOrder={adminOrder}
            sum={sum}
            handleOrderQuantitySum={handleOrderQuantitySum}
            handleToppingArray={handleToppingArray}
            handleClear={handleClear}
          />
        </Route>
        <Route path="/basket">
          <Basket
            toppings={toppings}
            adminOrder={adminOrder}
            orderStatus={orderStatus}
            totalPrice={totalPrice}
          />
        </Route>
        <Route path="/empty">
          <Routing />
        </Route>
        <Route path="/admin">
          <Admin
            adminOrder={adminOrder}
            orderStatus={orderStatus}
            totalPrice={totalPrice}
          />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      {adminOrder && (
        <StyledSuccessContainer>
          <StyledSuccessContainer id="success-message"></StyledSuccessContainer>
          <StyledSuccessText>
            Check your order details from
            <StyledBasketSpan>Basket</StyledBasketSpan> or create a new order.
          </StyledSuccessText>
        </StyledSuccessContainer>
      )}
      <Footer />
    </>
  );
};
export default App;
