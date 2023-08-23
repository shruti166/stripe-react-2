import React, {useState} from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';


export default function PaymentForm() {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    }
    if(!error) {
        try {
            const {id} =  paymentMethod
            const response = await axios.post("http://loacalhost:4000/payment", {
                amount: 1000,
                id
            })

            if(response.data.message) {
                console.log("Successful Payment")
                setSuccess(true);
            }
        } catch(err) {
            console.log("Error", err)
        }
    } else {
        console.log(err);
    }
  return (
    <div>
         
    </div>
  )
}
