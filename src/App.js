import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom"
import Form from "./Form"
import Order from "./Order"
import schema from "./formSchema"
import * as yup from "yup"

const initialFormValues = {
  name: '',
  email: '',
  size: '',
  toppings: '',
}
const initialFormErrors = {
  name: "",
  email: "",
  size: "",
  toppings: "",
};

export default function App () {
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue })
  }
    const submitForm = () => {
      const newOrder = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        size: formValues.size,
        toppings: ["Cheese", "Marinara Sauce", "Pepporoni", "Jalapeno"].filter(
          (topping) => formValues[topping]
        ),
      }
    }

    const inputChange = (name, value) => {
      yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
          setFormErrors({
            ...formErrors,
            [name]: "",
          });
        })
        .catch((err) => {
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0],
          });
        });
  
      setFormValues({
        ...formValues,
        [name]: value, 
      });
    };

    return (
      <>
        <h1>Lambda Eats</h1>
        <p>Yummy pizza nom nom</p>
        <BrowserRouter>
        <Link to="/">Home</Link>
        <Link id= "order-pizza" to="/pizza">New Order</Link>
        <Link to="/add2order">
          <button id="order-button"/>
        </Link>
        </BrowserRouter>
        <Form
        values={formValues}
        change={inputChange}
        update={updateForm}
        submit={submitForm}
        errors={formErrors}
      />
       {
        orders.map(order => {
          return (
            <Order key={order.id} details={order} />
          )
        })
      }
      </>
    );
  
}