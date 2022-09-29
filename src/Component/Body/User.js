import React from 'react';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'



const User = () => {
    return (
        <div>
            <div className='text-center flex flex-col md:flex-row justify-around items-center self-center'>
                <div className="avatar ml-2 lg:ml-0">
                    <div className="w-20 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className='mt-2 md:mt-1 lg:mt-0'>
                    <h2>Ms Tasmia Noor</h2>
                    <p> <FontAwesomeIcon icon={faLocationPin} /> <small>Dhaka, Bangladesh</small></p>
                </div>
            </div>
            <div className='text-center grid grid-cols-3 my-6 mx-4 rounded-lg bg-slate-200 py-2'>
                <div>
                    <p>
                        <strong>75</strong>
                        <small>kg</small>
                    </p>
                    <p>
                        <small>Weight</small>
                    </p>
                </div>
                <div>
                    <p>
                        <strong>5.6</strong>
                    </p>
                    <p>
                        <small>Height</small>
                    </p>
                </div>
                <div>
                    <p>
                        <strong>25</strong>
                        <small>yrs</small>
                    </p>
                    <p>
                        <small>Age</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default User;