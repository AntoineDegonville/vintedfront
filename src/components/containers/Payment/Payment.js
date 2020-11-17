import React, { useState } from "react";
import "../Payment/Payment.css";
import { useLocation, useHistory } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import "./../../Modal/Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Paiement = () => {
  const [succeed, setSucceed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const history = useHistory();
  const { price } = location.state;
  const { name } = location.state;
  const total = price + 0.7 + 1.4;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement);
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      console.log(stripeToken);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: name,
          amount: price * 100,
        }
      );
      console.log(response.data);
      if (response.data.status === "succeeded") {
        setSucceed(true);
      }
    } catch (e) {
      console.log(e.response);
    }
  };

  return succeed ? (
    <div className="modal_box">
      <FontAwesomeIcon icon="smile"></FontAwesomeIcon>
      Votre achat à bien été éfféctué !
      <div>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
            setHidden(false);
            history.push("/");
          }}
          className="modal_close"
          icon="times"
        ></FontAwesomeIcon>
      </div>
    </div>
  ) : (
    <div>
      <div className="background_color_payment">
        <div className="payment_container">
          <p>Résumé de la commande</p>
          <ul>
            <div className="payment_content">
              <li>
                <span>Commande</span> <span>{price} €</span>
              </li>
              <li>
                <span>Frais de protection acheteurs</span> <span>0.70 €</span>
              </li>
              <li>
                <span>Frais de port</span> <span>1.40 €</span>
              </li>
            </div>
            <div className="payment_total_section">
              <li>
                <span style={{ fontSize: 18, fontWeight: "bold" }}>Total</span>
                <span style={{ fontSize: 18, fontWeight: "bold" }}>
                  {total.toFixed(2)} €
                </span>
              </li>
              <div className="payment_bar">
                <p>
                  Il ne vous reste plus qu'un étape pour vous offrir{" "}
                  <b>{name}</b>. Vous allez payer <b>{total.toFixed(2)}</b> €
                  (frais de protection et frais de port inclus).
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="bar">
                    <CardElement></CardElement>
                  </div>
                  <button type="submit">Payer</button>
                </form>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Paiement;
