import React, { useEffect, useState } from 'react';
import './Body.css'
import Cards from './Cards';
import Tracker from './Tracker';
const Body = () => {
    // task use state declare for storing the data
    const [task, setTask] = useState([])
    const [ workOut , setWorkOut ] = useState([])

    // task data fetch from product json data
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])

    // Event listner added for Add to list in card section
    const addToList = (activity) => {
        const newWorkOut = [...workOut, activity];
        setWorkOut(newWorkOut)
    }

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6'>
            <div className='col-span-1 md:col-span-2 lg:col-span-3'>
                <Cards
                    task={task}
                    setTask={setTask}
                    addToList={addToList}
                ></Cards>
            </div>
            <div className='col-span-1'>
                <Tracker
                    task={task}
                    setTask={setTask}
                    workOut={workOut}
                ></Tracker>
            </div>
        </div>
    );
};

export default Body;