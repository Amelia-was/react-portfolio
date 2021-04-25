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
            name: 'Tweet Tracks'
        },
        {
            name: 'ECommerce Back End'
        },
        {
            name: 'ReadMe Generator'
        },
        {
            name: 'Note Taker'
        },
        {
            name: 'Team Profile Generator'
        },
        {
            name: 'Tech Blog'
        },
        {
            name: 'Swatch'
        },
        {
            name: 'Social Network API'
        },
        {
            name: 'Budget Tracker'
        }
    ])

    return (
        <section className='portfolio-container'>
            {apps.map((app, i) => 
            <Project name={app.name} index={i} />
            )}
        </section>
    );
};

export default Portfolio;