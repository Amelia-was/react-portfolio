import React from 'react';


function Resume() {
    return (
        <section>
            <a 
            className='icon-link flex align-center resume-link'
            href={require('../../assets/resume-2021.pdf').default}>Click to download my resume <i className='fas fa-external-link-alt'></i></a>
        </section>
    );
};

export default Resume;