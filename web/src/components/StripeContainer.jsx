import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "stripe/react-stripe-js";

const PUBLIC_KEY = "pk_test_51NhtXOSJhyV2DfSil4SSOwODyHgV218Z22Fm6rAGJQ8KFt6FOcSZKVYNlgEjRoVjeZ0f04tKCJG5lzUTIXlCm9nO000QkF4ecH";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
  )
}
