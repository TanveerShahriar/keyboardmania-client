import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [product, setProduct] = useState([]);
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [input, setInput] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_LINK}/products/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
            .then(data => {
                setProduct(data);
                setInput(data.min)
            })
}, [id])

const { image, name, description, min, quantity, price } = product;

const onSubmit = async data => {
    const userName = user.displayName;
    const email = user.email;
    const phone = data.phone;
    const address = data.address;
    const pay = input * price;
    const order = { name, userName, email, phone, address, pay }
    fetch(`${process.env.REACT_APP_SERVER_LINK}/order`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(order)
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
            }
            return res.json()
        })
        .then(data => {
            toast("Order Placed");
            navigate('/dashboard/myOrders')
        })
}

return (
    <div className='container mx-auto py-12'>
        <div className="card shadow-xl lg:flex-row">
            <div className='lg:w-1/2'>
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body bg-primary text-left lg:w-1/2">
                <div className='text-white'>
                    <h2 className="card-title text-secondary text-4xl">{name}</h2>
                    <p className='text-xl my-2'>{description}</p>
                    <div className='text-lg'>
                        <p>Minimum Order Quantity : {min}</p>
                        <p>Available Quantity : {quantity}</p>
                        <p>Price : ${price}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input
                            type="text text-black"
                            className="input input-bordered w-full max-w-xs"
                            value={user.displayName}
                            readOnly
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input
                            type="email"
                            className="input input-bordered w-full max-w-xs"
                            value={user.email}
                            readOnly
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-yellow-100 text-base">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Phone</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Phone"
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone Number is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-yellow-100 text-base">{errors.phone.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Address</span>
                        </label>
                        <textarea
                            placeholder="Your Address"
                            className="textarea w-full max-w-xs"
                            rows={3}
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-yellow-100 text-base">{errors.address.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Quantity</span>
                        </label>
                        <input
                            type="number"
                            value={input}
                            onInput={e => setInput(e.target.value)}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {input < min && <span className="label-text-alt text-yellow-100 text-base">You Can't Order Less Than {min}</span>}
                            {input > quantity && <span className="label-text-alt text-yellow-100 text-base">You Can't Order More Than {quantity}</span>}
                        </label>
                    </div>
                    <input className='btn btn-outline btn-secondary text-xl font-bold w-full max-w-xs my-6' type="submit" value="Buy Now" disabled={input < min || input > quantity} />
                </form>
            </div>
        </div>
    </div>
);
};

export default Purchase;