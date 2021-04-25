import React from 'react';
import { toURL } from '../../utils/helpers';

function Project({ name, readme, altURL, index }) {
    return (
        <a 
        className='portfolio-img-container'
            href={
                altURL 
                || (readme && `https://github.com/amelia-was/${toURL(name)}`) 
                || `https://amelia-was.github.io/${toURL(name)}`
            }>
            <div className='screen'>
                <h3 className='portfolio-img-title'>{name}</h3>
            </div>
            <img 
            className='portfolio-img'
            src={require(`../../assets/imgs/apps/app-${index}.png`).default} 
            alt={`Screenshot of ${name}`} />
        </a>
    );
};

export default Project;