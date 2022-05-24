import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faUserGroup, faComments } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-secondary text-6xl font-bold my-8'>Summary</h1>
            <div className="stats container mx-auto stats-vertical lg:stats-horizontal shadow-2xl bg-primary text-white my-6">

                <div className="stat shadow-2xl text-center">
                    <div>
                        <FontAwesomeIcon className='text-5xl' icon={faFlag} />
                    </div>
                    <div className="stat-value">12</div>
                    <div className="stat-title text-3xl font-bold">Countries</div>
                </div>


                <div className="stat shadow-2xl">
                    <div>
                        <FontAwesomeIcon className='text-5xl' icon={faUserGroup} />
                    </div>
                    <div className="stat-value">549+</div>
                    <div className="stat-title text-3xl font-bold">Happy Clients</div>
                </div>

                <div className="stat shadow-2xl">
                    <div>
                        <FontAwesomeIcon className='text-5xl' icon={faComments} />
                    </div>
                    <div className="stat-value">924+</div>
                    <div className="stat-title text-3xl font-bold text-white">Feedbacks</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;