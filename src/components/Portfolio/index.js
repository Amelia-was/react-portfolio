import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [ apps ] = useState([
        {
            name: 'Code Quiz'
        },
        {
            name: 'Taskinator'
        },
        {
            name: 'Taskmaster Pro'
        },
        {
            name: 'Work Day Schedule'
        },
        {
            name: 'Weather Dashboard'
        },
        {
            name: 'Tweet Tracks',
            altURL: 'https://projone.github.io/tweet-tracks/',
            altRepo: 'https://github.com/projone/tweet-tracks'
        },
        {
            name: 'ECommerce Back End',
            notDeployed: true
        },
        {
            name: 'ReadMe Generator',
            notDeployed: true
        },
        {
            name: 'Note Taker',
            altURL: 'https://polar-sea-04536.herokuapp.com/'

        },
        {
            name: 'Team Profile Generator'
        },
        {
            name: 'Tech Blog',
            altURL: 'https://sleepy-scrubland-82236.herokuapp.com/'
        },
        {
            name: 'Swatch',
            altRepo: 'https://github.com/Project-Two-Group-Nine/SWATCH',
            altURL: 'https://swatch-makeup-reviews.herokuapp.com/'
        },
        {
            name: 'Social Network API',
            notDeployed: true
        },
        {
            name: 'Budget Tracker',
            altURL: 'https://blooming-tor-59716.herokuapp.com/',
            featured: true
        }
    ])

    return (
        <section className='portfolio-container'>
            {apps.map((app, i) => 
            <Project name={app.name} index={i} altRepo={app.altRepo} altURL={app.altURL} notDeployed={app.notDeployed} featured={app.featured}/>
            )}
        </section>
    );
};

export default Portfolio;