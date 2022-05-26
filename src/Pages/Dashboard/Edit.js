import { signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import auth from '../../firebase.init';

const Edit = ({ account, setEdit, refresh, setRefresh }) => {
    let accountEducation = account.education || "";
    let accountLocation = account.location || "";
    let accountPhone = account.phone || "";
    let accountLinkedin = account.linkedin || "";

    const [name, setName] = useState(account.displayName);
    const [education, setEducation] = useState(accountEducation);
    const [location, setLocation] = useState(accountLocation);
    const [phone, setPhone] = useState(accountPhone);
    const [linkedin, setLinkedin] = useState(accountLinkedin);

    const handleSubmit = () => {
        const updatedProfile = { name, email: account.email, education, location, phone, linkedin }
        swal("Are you sure you want to update", {
            buttons: ["No!", true],
        })
            .then(proceed => {
                if (proceed) {
                    fetch(`${process.env.REACT_APP_SERVER_LINK}/user`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(updatedProfile)
                    }).then(res => {
                        if (res.status === 401 || res.status === 403) {
                            signOut(auth);
                            localStorage.removeItem('accessToken');
                        }
                        return res.json()
                    })
                        .then(data => {
                            toast("Update")
                            setRefresh(!refresh)
                            setEdit(false)
                        })
                }
            })
    }

    return (
        <div>
            <div>
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered" value={name} onInput={e => setName(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered" value={account.email} readOnly />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input type="text" placeholder="Your Education" className="input input-bordered" value={education} onInput={e => setEducation(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" placeholder="Your Location" className="input input-bordered" value={location} onInput={e => setLocation(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="Your Phone" className="input input-bordered" value={phone} onInput={e => setPhone(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn</span>
                        </label>
                        <input type="text" placeholder="Your LinkedIn URL" className="input input-bordered" value={linkedin} onInput={e => setLinkedin(e.target.value)} />
                    </div>
                </form>
            </div>
            <div>
                <button className='btn btn-outline btn-secondary m-4' onClick={handleSubmit}>Update</button>
                <button className='btn btn-outline btn-secondary m-4' onClick={() => setEdit(false)}>Cancel</button>
            </div>
        </div>
    );
};

export default Edit;