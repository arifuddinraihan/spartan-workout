import React from 'react';
import './Breakbtn.css'

const Breakbtn = (props) => {
    // console.log(props)
    const { breakBtnFunction, breakButton } = props;
    const { time } = breakButton;
    return (
        <button
            onClick={() => breakBtnFunction(breakButton)}
            className="btn btn-xs text-sm block">{time}
        </button>

    );
};

export default Breakbtn;