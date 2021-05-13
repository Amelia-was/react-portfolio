import React from 'react';
import { toURL } from '../../utils/helpers';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Project({ name, altURL, altRepo, notDeployed, featured, index }) {
    return (
        
        <div className={(featured && `featured`) || `portfolio-img-container`}>
            
            <div className='screen flex justify-center align-center'>
                <h3 className='portfolio-img-title'>{name}</h3>
            </div>
            <div className='link-container flex justify-center align-center'>
                <a
                    className='icon-link'
                    target='_blank'
                    href={altRepo || `https://github.com/amelia-was/${toURL(name)}`}>
                    <FaGithub className='icon portfolio-icon' />
                </a>
                {notDeployed ||
                    <a
                        className='icon-link'
                        target='_blank'
                        href={altURL || `https://amelia-was.github.io/${toURL(name)}`}>
                        <FaExternalLinkAlt className='icon portfolio-icon' />
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