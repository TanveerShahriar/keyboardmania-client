import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [user] = useAuthState(auth);
    const [value, setValue] = useState(5);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = async data => {
        const name = user.displayName;
        const description = data.review;
        const rating = value;
        const review = { name, description, rating }
        fetch(`${process.env.REACT_APP_SERVER_LINK}/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
            .then(data => {
                toast("Review Added");
                navigate('/')
            })
    }

    return (
        <div className='flex justify-center items-center my-12'>
            <div className="card w-96 bg-primary shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl text-white font-bold">Add Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input
                                type="text"
                                value={user.displayName}
                                readOnly
                                className="input input-bordered w-full max-w-xs"
                                {...register("name")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Review</span>
                            </label>
                            <textarea
                                placeholder="Your review"
                                className="textarea w-full max-w-xs"
                                rows={3}
                                {...register("review", {
                                    required: {
                                        value: true,
                                        message: 'Please add review'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-yellow-100 text-base">{errors.review.message}</span>}
                            </label>
                        </div>

                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" onClick={() => { setValue(1) }} />

                            <input type="radio" name="rating-1" className="mask mask-star" onClick={() => { setValue(2) }} />

                            <input type="radio" name="rating-1" className="mask mask-star" onClick={() => { setValue(3) }} />

                            <input type="radio" name="rating-1" className="mask mask-star" onClick={() => { setValue(4) }} />

                            <input type="radio" name="rating-1" className="mask mask-star" onClick={() => { setValue(5) }} />

                        </div>

                        <input className='btn btn-outline btn-secondary w-full max-w-xs text-white font-bold text-xl' type="submit" value="ADD" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Login;