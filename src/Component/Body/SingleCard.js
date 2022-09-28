import React from 'react';
import './SingleCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimeline} from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({activity, setTask}) => {
    const { name, forAge, timeNeed, details, img} = activity
    // console.log(activity.id)
    return (
        <div className="card w-1/10 bg-base-100 shadow-xl">
            <figure><img className='h-40' src={img} alt="/" /></figure>
            <div className="card-body relative px-1 lg:px-3">
                <h2 className="card-title text-lg md:text-xl lg:text-2xl">{name}</h2>
                <p><small className='text-xs md:text-sm lg:text-lg'>{details}</small></p>
                <p><strong className='text-sm md:text-lg lg:text-xl'>For Age : {forAge}</strong></p>
                <p><strong className='text-sm md:text-lg lg:text-xl'>Time required : <span>{timeNeed}</span>Min</strong></p>
                <div className="card-actions justify-center mt-5">
                    <button
                        className="btn btn-block rounded btn-secondary absolute bottom-0 text-white">
                        <div className='flex gap-2 justify-center items-center'>
                            <FontAwesomeIcon icon={faTimeline} />
                            <p>Add to list</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;