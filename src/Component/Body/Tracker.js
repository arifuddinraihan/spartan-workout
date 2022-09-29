import React, { useState } from 'react';
import './Tracker.css'
import User from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Tracker = ({workOut}) => {
    const [ breakTime , setBreakTime ] = useState(0)

    const breakBtn = () => {
        console.log("clicked")
        setBreakTime(breakTime)
    }
   
    let workTime = 0;
    for(const perWorks of workOut){
        workTime = workTime + perWorks.timeNeed;
    }

    return (
        <div className='sticky top-20'>
            <div className="card w-3/10 bg-base-100 shadow-xl mr-2">
                <User></User>
                <div className="px-2 mt-0 relative">
                    <h2 className="text-sm lg:text-xl">Add A Break</h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-1 bg-slate-200 rounded-lg p-4'>
                        <button onClick={()=>breakBtn()} className="btn btn-xs text-sm block">10<small className='text-xs'>s</small></button>
                        {/* <button onClick={()=>breakBtn(20)} className="btn btn-xs text-sm block">20<small className='text-xs'>s</small></button> */}
                        {/* <button onClick={()=>breakBtn(30)} className="btn btn-xs text-sm block">30<small className='text-xs'>s</small></button> */}
                        {/* <button onClick={()=>breakBtn(40)} className="btn btn-xs text-sm block">40<small className='text-xs'>s</small></button> */}
                    </div>
                    <h2 className="text-sm lg:text-xl mt-2">Exercise Details</h2>
                    <div className='mt-3 mb-4'>
                        <div className='flex justify-between bg-slate-200 p-3 rounded-lg mb-2'>
                            <p className='block text-sm md:text-lg'>Work time</p>
                            <p className='block text-sm md:text-lg'>{workTime} <small className='text-xs md:text-sm lg:text-lg'>Min</small></p>
                        </div>
                        <div className='flex justify-between bg-slate-200 p-3 rounded-lg'>
                            <p className='block text-sm md:text-lg'>Break time</p>
                            <p className='block text-sm md:text-lg'>{breakTime} <small className='text-xs md:text-sm lg:text-lg'>Sec</small></p>
                        </div>
                    </div>
                    <div className="mt-16 card-actions justify-center">
                        <button
                            className="btn btn-block rounded btn-success absolute bottom-0 text-white">
                            <div className='flex gap-2 justify-center items-center'>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <p>Activity Done</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tracker;