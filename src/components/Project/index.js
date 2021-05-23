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
                    <span class="material-icons portfolio-icon">
                        code
                    </span>
                </a>
                {notDeployed ||
                    <a
                        className='icon-link'
                        target='_blank'
                        href={altURL || `https://amelia-was.github.io/${toURL(name)}`}>
                    <span class="material-icons portfolio-icon">
                        insert_link
</span>
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