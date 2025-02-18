import {
  CardElement,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import Spinner from "components/Spinner";
import { useState } from "react";

// https://docs.stripe.com/checkout/quickstart#testing

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    

    var paymentElement = elements.create("payment", {
      fields: {
        billingDetails: {
          name: "never",
          email: "never",
        },
      },
    });

    // const response = await fetch("http://localhost:4000/create-subscription", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     paymentMethod: paymentMethod?.paymentMethod?.id,
    //     name,
    //     email,
    //     priceId
    //   }),
    // }).then((res) => res.json());

    return;

    // setIsLoading(true);
    // console.log({
    //   elements,
    //   confirmParams: {
    //     return_url: `${APP_URL}/checkout/success`,
    //     receipt_email: email,
    //   },
    // });

    // const { error } = await stripe.confirmPayment({
    //   elements,
    //   confirmParams: {
    //     return_url: `${APP_URL}/checkout/success`,
    //     receipt_email: email,
    //   },
    // });

    // if (error.type === "card_error" || error.type === "validation_error") {
    //   setMessage(error.message);
    // } else {
    //   setMessage("An unexpected error occurred.");
    // }
    // setIsLoading(false);
  };

  return (
    <form id="payment-form" className="checkout__form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement id="link-authentication-element" />
      <PaymentElement />
      {/* <CardElement /> */}
      {/* <div className="form-group">
        <label htmlFor="code">Email</label>
        <input
          id="code"
          type="email"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="code">Card number</label>
        <input
          id="code"
          type="email"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="1234 1234 1234 1234"
        />
      </div>
      <div className="form-group form-group-6">
        <label htmlFor="code">Expiration</label>
        <input id="code" type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="MM/YY" />
      </div>
      <div className="form-group form-group-6">
        <label htmlFor="code">CVC</label>
        <input id="code" type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="CVC" />
      </div>
      <div className="form-group">
        <label htmlFor="code">Country</label>
        <select name="" id="">
          <option value="">Vietnam</option>
        </select>
      </div> */}
      <div className="form-group">
        <label htmlFor="code">Coupon Code</label>
        <input
          id="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Coupon Code"
        />
      </div>

      <button disabled={isLoading || !stripe || !elements} id="submit" className="checkout__btn">
        {isLoading ? <Spinner /> : "Pay CAD$25.00"}
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
