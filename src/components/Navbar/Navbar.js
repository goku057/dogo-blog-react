import React from 'react';
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Welcome to Dogo Blog</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/create">Add Blog</Link>
            </div>
        </div>
    );
};

export default Navbar;