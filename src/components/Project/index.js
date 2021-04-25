import React from 'react';
import { toURL } from '../../utils/helpers';

function Project({ name, index }) {
    return (
        <a 
        className='portfolio-img-container'
        href={`https://github.com/amelia-was/${toURL(name)}`}>
            <div className='screen'>
                <h3 className='portfolio-img-title'>{name}</h3>
            </div>
            <img 
            className='portfolio-img'
            src={require(`../../assets/imgs/app-${index}.png`).default} 
            alt={`Screenshot of ${name}`} />
        </a>
    );
};

export default Project;