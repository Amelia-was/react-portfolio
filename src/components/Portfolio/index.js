import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [ apps ] = useState([
        {
            name: 'Code Quiz',
            readme: false,
            altURL: false
        },
        {
            name: 'Taskinator',
            readme: false
        },
        {
            name: 'Taskmaster Pro',
            readme: false
        },
        {
            name: 'Work Day Schedule',
            readme: false
        },
        {
            name: 'Weather Dashboard',
            readme: false
        },
        {
            name: 'Tweet Tracks',
            readme: true,
            altURL: 'https://github.com/projone/tweet-tracks'
        },
        {
            name: 'ECommerce Back End',
            readme: true
        },
        {
            name: 'ReadMe Generator',
            readme: true
        },
        {
            name: 'Note Taker',
            readme: true
        },
        {
            name: 'Team Profile Generator',
            readme: true
        },
        {
            name: 'Tech Blog',
            readme: true
        },
        {
            name: 'Swatch',
            readme: true,
            altURL: 'https://github.com/Project-Two-Group-Nine/SWATCH'
        },
        {
            name: 'Social Network API',
            readme: true
        },
        {
            name: 'Budget Tracker',
            readme: true
        }
    ])

    return (
        <section className='portfolio-container'>
            {apps.map((app, i) => 
            <Project name={app.name} readme={app.readme} index={i} altURL={app.altURL} />
            )}
        </section>
    );
};

export default Portfolio;