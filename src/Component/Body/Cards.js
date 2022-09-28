import React from 'react';
import './Cards.css'
import SingleCard from './SingleCard';

const Cards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ml-2 lg:ml-0'>
            <SingleCard></SingleCard>
        </div>
    );
};

export default Cards;