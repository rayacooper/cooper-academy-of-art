import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

import course_listing from './../../course_listing';

const Home = () => {

    const courses = course_listing.map(e => {
        return (
            <Link to={'/lesson/'+e.location}>
                <div className="home_course-listing">
                    <img src={e.image} />
                    <h2>{e.title}</h2>
                </div>
            </Link>
            
        )
    })

    return(
        <div id="home-wrapper">
            <h1>Home</h1>
            {courses}
        </div>
    )
}

export default Home;