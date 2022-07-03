import React from  'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <div id='navbar'>
            <ul className = 'navbar-links'>
                <li><a>Home</a></li>
                <li><a>About</a></li>
            </ul>
            <span>Cooper Art Academy</span>
        </div>
    )
}

export default Navbar;