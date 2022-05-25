import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import auth from '../../firebase.init';
import swal from 'sweetalert';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`${process.env.REACT_APP_SERVER_LINK}/user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const makeAdmin = (email) => {
        fetch(`${process.env.REACT_APP_SERVER_LINK}/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    const deleteUser = (id) => {
        swal("Are you sure you want to delete your comment?", {
            buttons: ["No!", true],
        })
            .then(proceed => {
                if (proceed) {
                    fetch(`${process.env.REACT_APP_SERVER_LINK}/user/${id}`, {
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
                            refetch();
                            toast("User delete");
                        })
                }
            })
    }

    return (
        <div className='container mx-auto'>
            <h2 className="text-2xl font-bold my-4">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th colSpan={2} className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.role !== 'admin' ?
                                    <button onClick={() => makeAdmin(user.email)} className="btn btn-xs">Make Admin</button>
                                    :
                                    <div className="badge badge-accent">Admin</div>}
                                </td>
                                <td><button className="btn btn-xs" onClick={() => deleteUser(user._id)}>Remove User</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;