import React, { useEffect, useState } from 'react';
import './Body.css'
import Cards from './Cards';
import Tracker from './Tracker';
const Body = () => {
    const [task, setTask] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6'>
            <div className='col-span-1 md:col-span-2 lg:col-span-3'>
                <Cards
                    task={task}
                    setTask={setTask}
                ></Cards>
            </div>
            <div className='col-span-1'>
                <Tracker
                    task={task}
                    setTask={setTask}
                ></Tracker>
            </div>
        </div>
    );
};

export default Body;