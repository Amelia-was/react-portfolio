import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';


function Resume() {
    return (
        <section>
            <a 
            className='icon-link flex align-center resume-link'
                href={require('../../assets/resume-2021.pdf').default}>Click to download my resume <FaExternalLinkAlt className='icon' /></a>
        </section>
    );
};

export default Resume;