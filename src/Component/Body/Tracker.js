import React from 'react';
import './Tracker.css'
import User from './User';

const Tracker = () => {
    return (
        <div className='fixed'>
            <div className="card w-1/10 bg-base-100 shadow-xl mr-2">
                <User></User>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tracker;