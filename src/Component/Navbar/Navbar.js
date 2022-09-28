import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className='sticky top-0 z-20'>
            <div className="navbar bg-info py-0 md:py-2 shadow-lg">
                <div className="flex-1">
                    <a href=".\" className="btn btn-ghost normal-case text-white text-2xl md:text-4xl mx-auto md:mx-8">
                    <strong>Spartan <FontAwesomeIcon icon={faDumbbell}/> WorkOut</strong>
                    </a>
                </div>
                <div className="flex-none gap-2">
                </div>
            </div>
        </div>
    );
};

export default Navbar;