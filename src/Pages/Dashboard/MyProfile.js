import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Edit from './Edit';
import Profile from './Profile';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [account, setAccount] = useState([]);
    const [edit, setEdit] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_LINK}/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAccount(data))
    }, [user, refresh]);

    return (
        <div className='container mx-auto'>
            <div className='flex flex-row justify-between items-center my-6'>
                <h1 className='text-xl font-bold'>{edit ? "Edit" : "Your"} Profile</h1>
                {
                    !edit && <button className='btn btn-outline btn-secondary' disabled={edit} onClick={() => setEdit(true)}>Edit</button>
                }

            </div>
            <div className='w-full flex justify-center'>
                <div className="card w-full lg:w-1/2 shadow-lg">
                    <div className="card-body">
                        {
                            edit ?
                                <Edit account={account} setEdit={setEdit} refresh={refresh} setRefresh={setRefresh}></Edit>
                                :
                                <Profile account={account}></Profile>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;