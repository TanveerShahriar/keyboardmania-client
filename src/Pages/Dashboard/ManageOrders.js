import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import auth from '../../firebase.init';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        if (user) {
            fetch(`${process.env.REACT_APP_SERVER_LINK}/allOrder`, {
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
    }, [refresh, user]);

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
    const handleShip = id => {
        swal("Are you sure you want to ship?", {
            buttons: ["No!", true],
        })
            .then(proceed => {
                if (proceed) {
                    fetch(`${process.env.REACT_APP_SERVER_LINK}/allOrder/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                    }).then(res => {
                        if (res.status === 401 || res.status === 403) {
                            signOut(auth);
                            localStorage.removeItem('accessToken');
                        }
                        return res.json()
                    })
                        .then(data => {
                            setRefresh(!refresh);
                            toast("Order Shipped")
                        })
                }
            })
    }

    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-xl my-4'>Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Client</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th colSpan={3} className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr
                                key={index}
                            >
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.userName}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td><p><span className="badge badge-success">{!order.paid && "Not"}Paid</span></p></td>
                                <td>
                                    {(!order.ship && order.paid) &&
                                        <button className='btn btn-xs btn-success' onClick={() => handleShip(order._id)}>Ship
                                        </button>
                                    }

                                    {order.ship && <div>
                                        <p><span className="badge badge-secondary">Shipped</span></p>
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

export default ManageOrders;