import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import auth from '../../firebase.init';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_LINK}/products`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = id => {
        swal("Are you sure you want to delete this?", {
            buttons: ["No!", true],
        })
            .then(proceed => {
                if (proceed) {
                    const url = `${process.env.REACT_APP_SERVER_LINK}/product/${id}`;
                    fetch(url, {
                        method: 'DELETE',
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
                            const remaining = products.filter(product => product._id !== id);
                            setProducts(remaining);
                        })
                }
            })
    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-2xl font-bold my-4'>Inventory</h1>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td><button className='btn btn-outline btn-secondary' onClick={() => handleDelete(product._id)}>X</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;