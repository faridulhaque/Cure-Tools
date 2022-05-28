import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Alert } from "react-st-modal";

const CheckOutForm = ({ info }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { price, name, email, _id } = info;

  //sending payment update information to db

  useEffect(() => {
    if (price) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data?.clientSecret);
          } else {
          }
        });
    }
  }, [price]);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      await Alert("Your payment is successful.", "Congratulation!");
      if(paymentIntent.id){

        updatePayment(paymentIntent.id);
      }
    }
  };
  const updatePayment = (trID) => {
    const payment = "paid";
    const transaction = trID;
    const data = { payment, transaction };
    if (payment && transaction) {
      console.log(transaction)
      fetch(`http://localhost:5000/order/payment/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="mt-3 btn btn-success"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckOutForm;
