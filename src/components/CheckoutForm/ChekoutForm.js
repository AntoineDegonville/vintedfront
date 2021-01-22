import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckoutForm = () => {
  const [hidden, setHidden] = useState(false);
  const [succeed, setSucceed] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  // const { price } = location.state;
  // const { name } = location.state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Stripe recup data bancaires.
    const cardElement = elements.getElement(CardElement);
    //Requête vers stripe pour le token.
    const stripeResponse = await stripe.createToken(cardElement);
    // Reponse de stripe
    const stripeToken = stripeResponse.token.id;
    //Envoi du token vers mon API.
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        token: stripeToken,
        // title: name,
        // amount: price,
      }
    );
    console.log(response.data);
  };
  //   if (response.data.status === "succeeded") {
  //     setSucceed(true);
  //   }

  return succeed ? (
    <div className="modal_box">
      <FontAwesomeIcon
        style={{ color: "orange", paddingRight: 10 }}
        icon="smile"
      ></FontAwesomeIcon>
      Votre achat à bien été éfféctué !
      <div>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
            setHidden(false);
            // history.push("/");
          }}
          className="modal_close"
          icon="times"
        ></FontAwesomeIcon>
      </div>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="bar">
        <CardElement></CardElement>
      </div>
      <button type="submit">Payer</button>
    </form>
  );
};

export default CheckoutForm;
