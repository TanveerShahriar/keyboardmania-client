import React from 'react';

const Profile = ({account}) => {
    return (
        <div className='text-lg text-left'>
            <p className='my-2'><span className='text-xl font-bold text-secondary'>Name</span> : {account.displayName}</p>
            <p className='my-2'><span className='text-xl font-bold text-secondary'>Email</span> : {account.email}</p>
            <p className='my-2'><span className='text-xl font-bold text-secondary'>Education</span> : {account.education ? account.education : "Provide Education"}</p>
            <p className='my-2'><span className='text-xl font-bold text-secondary'>Location</span> : {account.location ? account.location : "Provide Location"}</p>
            <p className='my-2'><span className='text-xl font-bold text-secondary'>Phone</span> : {account.phone ? account.phone : "Provide Phone No"}</p>
            <p className='my-2'><span className='text-xl font-bold text-secondary'>LinkedIn</span> : {account.linkedin ? <a href={`${account.linkedin}`} target="_blank" rel="noopener noreferrer">{account.linkedin}</a> : "Provide LinkedIn Id"}</p>
        </div>
    );
};

export default Profile;