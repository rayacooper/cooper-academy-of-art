import React, {useState} from  'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    let [dropDown, updateDropDown] = useState(false);

    const clickMenu = () => {
        updateDropDown(!dropDown);
        console.log(dropDown)
    }

    return(
        <div id='navbar'>
            <img src='#' alt='Hamburger Menu' onClick={() => clickMenu()}/>

            <ul className = 'navbar-links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <span>Cooper Art Academy</span>
        </div>
    )
}

export default Navbar;