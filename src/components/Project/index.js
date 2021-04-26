import React from 'react';
import { toURL } from '../../utils/helpers';

function Project({ name, altURL, altRepo, notDeployed, index }) {
    return (
        
        <div className='portfolio-img-container'>
            
            <div className='screen flex justify-center align-center'>
                <h3 className='portfolio-img-title'>{name}</h3>
            </div>
            <div className='link-container flex justify-center align-center'>
                <a
                    className='icon-link'
                    target='_blank'
                    href={altRepo || `https://github.com/amelia-was/${toURL(name)}`}>
                    <i className='fab fa-github portfolio-icon'></i>
                </a>
                {notDeployed ||
                    <a
                        className='icon-link'
                        target='_blank'
                        href={altURL || `https://amelia-was.github.io/${toURL(name)}`}>
                        <i className='fas fa-external-link-alt portfolio-icon'></i>
                    </a>
                }
            </div>
            <img 
            className='portfolio-img'
            src={require(`../../assets/imgs/apps/app-${index}.png`).default} 
            alt={`Screenshot of ${name}`} />
        </div>
    );
};

export default Project;