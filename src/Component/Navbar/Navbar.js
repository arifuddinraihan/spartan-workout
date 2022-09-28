import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-info py-0 md:py-2 sticky shadow-lg z-10">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-white text-2xl md:text-4xl mx-auto md:mx-8">The Spartan Workout</a>
                </div>
                <div className="flex-none gap-2">
                </div>
            </div>
        </div>
    );
};

export default Navbar;