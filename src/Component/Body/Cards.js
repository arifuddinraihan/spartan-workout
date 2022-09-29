import React from 'react';
import './Cards.css'
import SingleCard from './SingleCard';

const Cards = ({ task, setTask, addToList }) => {

    return (
        <div>
            <h1 className='text-lg md:text-2xl lg:text-4xl mt-4 mb-6 ml-5 lg:ml-0'>Jump on today's workout</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 ml-2 lg:ml-0'>
                {
                    task.map((activity) => (<SingleCard
                        activity={activity}
                        setTask={setTask}
                        key={activity.id}
                        addToList={addToList}
                    ></SingleCard>))
                }
            </div>
        </div>
    );
};

export default Cards;