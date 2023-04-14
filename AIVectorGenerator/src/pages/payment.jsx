import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { CheckoutForm } from "../components/checkoutForm";
import { useLoaderData } from "react-router-dom";



export const Payment = ()=>{
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const data = useLoaderData()


        useEffect(() => {
            fetch("http://137.184.24.251/api/stripeConfig").then(async (r) => {
            const { publishableKey } = await r.json();
            setStripePromise(loadStripe(publishableKey));
            });
        }, []);


        useEffect(() => {

            axios.post("http://137.184.24.251/api/create-payment-intent", {
                price: data.price,
                currency: 'usd',
                paymentMethodType: 'card',
            }).then(async (result) => {
                var { clientSecret } =  result.data;
                console.log('client secret', result);
                setClientSecret(clientSecret);
                });
        }, []);


        return (
            <>
            {clientSecret && stripePromise && (
                <Box sx={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Elements  stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm />
                    </Elements>
                </Box>
            )}
            </>
        );
}