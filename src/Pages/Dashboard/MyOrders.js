import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`${process.env.REACT_APP_SERVER_LINK}/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
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
                    setOrders(data);
                });
        }
    }, [refresh, user, navigate]);

    const handleDelete = id => {
        swal("Are you sure you want to delete your order?", {
            buttons: ["No!", true],
        })
            .then(proceed => {
                if (proceed) {
                    fetch(`${process.env.REACT_APP_SERVER_LINK}/order/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
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
                            setRefresh(!refresh);
                            toast("Order Deleted")
                        });
                }
            })
    }

    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-xl my-4'>My Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th colSpan={2} className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr
                                key={index}
                            >
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.address}</td>
                                <td>{order.pay}</td>
                                <td>
                                    {!order.paid &&
                                        <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className='btn btn-xs btn-success'>Pay
                                            </button>
                                        </Link>
                                    }

                                    {order.paid && <div>
                                        <p><span className="badge badge-success">Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}
                                </td>
                                <td>
                                    {!order.paid &&
                                        <button className='btn btn-xs btn-success' onClick={() => handleDelete(order._id)}>Cancel
                                        </button>
                                    }

                                    {order.paid && <div>
                                        <p><span className="badge badge-secondary">Can't Cancel</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;