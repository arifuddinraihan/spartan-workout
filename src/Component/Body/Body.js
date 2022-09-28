import React from 'react';
import './Body.css'
import Cards from './Cards';
import Tracker from './Tracker';
const Body = () => {
    return (
        <div className="container mx-auto my-4 md:my-8">
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6'>
                <div className='col-span-1 md:col-span-2 lg:col-span-3'>
                    <Cards></Cards>
                </div>
                <div className='col-span-1'>
                    <Tracker></Tracker>
                </div>
            </div>
        </div>
    );
};

export default Body;