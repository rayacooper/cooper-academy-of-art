import React, {Component} from 'react';
import {Switch, useParams} from 'react-router-dom';

import course_listing from '../../course_listing';

import './Lesson.css'



class Lesson extends Component {

    render() {
        return (
            <div className='lesson-main'>
                <Child />
                <h1>Did it work?</h1>
            </div>
        )
    }
};



const Child = () => {
    const {id} = useParams();
    let currentLesson = {}
    for(let i = 0; i < course_listing.length, i++;){
        if(course_listing[i].location === id){
            currentLesson = course_listing[i];
        }
    }
    
    return(
        <div>
            <h2>{currentLesson.title}</h2>
        </div>
    )
}

export default Lesson;