import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
const stripePromise = loadStripe('pk_test_51L3zbSHYptib3ECRXqn80aSoDZo6n2bun6iK9smVf009L6V8CO7ea4QY8K04fovPZtqTUIFBSnuTd8s5mM0cFs0p00etTdcWed');

const Payment = () => {
    const [info, setInfo] = useState({})
    console.log(info)
    
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
        .then(res => res.json())
        .then(data => setInfo(data))

    },[info])
    return (
        <div className='container'>
            <div>
                <h2 className='my-4 text-center'>payment</h2>
                <h3 className='my-3'>Pay {info.price} for {info.name}</h3>
                <div className='w-25'>
                <Elements stripe={stripePromise}>
    <CheckOutForm info={info} />
  </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;