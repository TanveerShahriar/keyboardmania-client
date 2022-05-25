import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const imageStorageKey = 'f5beab930ad664896126dde759873a3f';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        min: parseFloat(data.min),
                        quantity: parseFloat(data.quantity),
                        price: parseFloat(data.price),
                        description: data.description,
                        image: img
                    }
                    if (data.quantity <= 0) {
                        swal("Please enter a valid quantity");
                    }
                    else if (data.min <= 0) {
                        swal("Please enter a valid minimum quantity");
                    }
                    else if (data.min > data.quantity) {
                        swal("Minimum order quantity can not be more than available quantity.");
                    }
                    else if (data.price <= 0) {
                        swal("Please enter a valid price")
                    }
                    else {
                        // send to database 
                        fetch(`${process.env.REACT_APP_SERVER_LINK}/product`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                                authorization: `Bearer ${localStorage.getItem('accessToken')}`
                            },
                            body: JSON.stringify(product)
                        })
                            .then(res => res.json())
                            .then(inserted => {
                                if (inserted.insertedId) {
                                    toast.success('Added successfully')
                                    reset();
                                }
                                else {
                                    toast.error('Failed to add');
                                }
                            })
                    }

                }

            })
    }

    return (
        <div className='container bg-danger mx-auto my-5 py-5 rounded login-form'>
            <h2 className="text-center mt-2 text-3xl font-bold">Add Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='my-4'>
                    <input type="text" placeholder="Enter Product Name" name="name" className='input input-bordered w-full max-w-xs' {...register("name")} required />
                </div>

                <div className='my-4'>
                    <input type="number" placeholder="Enter Quantity" name="quantity" className='input input-bordered w-full max-w-xs' {...register("quantity")} required />
                </div>

                <div className='my-4'>
                    <input type="number" placeholder="Enter Minimum Order Quantity" name="min" className='input input-bordered w-full max-w-xs' {...register("min")} required />
                </div>

                <div className='my-4'>
                    <input type="number" placeholder="Enter Price" name='price' className='input input-bordered w-full max-w-xs' {...register("price")} required />
                </div>

                <div className='my-4'>
                    <input type="text" placeholder="Description" name='description' className='input input-bordered w-full max-w-xs' {...register("description")} required />
                </div>

                <div className='pl-40 lg:pl-[550px]'>
                    <input type="file" name='picture' {...register("image")} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                </div>
                <br />

                <button className='btn btn-outline btn-secondary' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;