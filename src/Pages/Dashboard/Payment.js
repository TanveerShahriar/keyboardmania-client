import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1p2eIVbZxZakrqdpdPRR5g92Gvo4XI20pAFfD1RwzLaF5eIjTZ6iszWjbjV2OT2VsR7XWyQW40IDkVvaVBvJVi00SpsmrW5y');

const Payment = () => {
    const { id } = useParams();
    const url = `${process.env.REACT_APP_SERVER_LINK}/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto lg:w-1/2 text-left'>
            <div className="card bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {order.patientName}</p>
                    <h2 className="card-title">Please Pay for {order.name}</h2>
                    <p>Your order will be delivered at {order.address}</p>
                    <p>Phone Number : {order.phone}</p>
                    <p>Please pay: ${order.pay}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;