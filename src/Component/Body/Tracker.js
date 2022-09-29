import React, { useEffect, useState } from 'react';
import './Tracker.css'
import User from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Breakbtn from './Breakbtn';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Tracker = ({ workOut }) => {
    // use State for break time buttons
    const [breakTime, setBreakTime] = useState([])

    // use state for event handler data
    const [newBreakTime, setNewBreakTime] = useState(0)

    // Break Button data fetch from btn json data file
    useEffect(() => {
        fetch('btn.json')
            .then(res => res.json())
            .then(data => setBreakTime(data))
    }, [])

    // Event listener for break buttons to set data into Tracker
    let newBreak = 0;
    const breakBtnFunction = (breakButton) => {
        newBreak = breakButton;
        setNewBreakTime(newBreak)
    }

    // Total Exercise time added
    let workTime = 0;
    for (const perWorks of workOut) {
        workTime = workTime + perWorks.timeNeed;
    }
    // Toast Added for Activity Completion
    const notify = () => {
        toast.success('Todays Activity Completed!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

    return (
        <div className='sticky top-20'>
            <div className="card w-3/10 bg-base-100 shadow-xl mr-2">
                <User></User>
                <div className="px-2 mt-0 relative">
                    <h2 className="text-sm lg:text-xl">Take Some Seconds of Break</h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-1 bg-slate-200 rounded-lg p-4'>
                        {
                            breakTime.map((breakButton) => (<Breakbtn
                                key={breakButton.id}
                                breakButton={breakButton}
                                breakBtnFunction={breakBtnFunction}
                            ></Breakbtn>))
                        }
                    </div>
                    <h2 className="text-sm lg:text-xl mt-2">Exercise Details</h2>
                    <div className='mt-3 mb-4'>
                        <div className='flex justify-between bg-slate-200 p-3 rounded-lg mb-2'>
                            <p className='block text-sm md:text-lg'>Work time</p>
                            <p className='block text-sm md:text-lg'>{workTime} <small className='text-xs md:text-sm lg:text-lg'>Min</small></p>
                        </div>
                        <div className='flex justify-between bg-slate-200 p-3 rounded-lg'>
                            <p className='block text-sm md:text-lg'>Break time</p>
                            <p className='block text-sm md:text-lg'>{newBreakTime} <small className='text-xs md:text-sm lg:text-lg'>Sec</small></p>
                        </div>
                    </div>
                    <div className="mt-16 card-actions justify-center">
                        <button onClick={()=>notify()}
                            className="btn btn-block rounded btn-success absolute bottom-0 text-white">
                            <div className='flex gap-2 justify-center items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <p>Activity Done</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Tracker;