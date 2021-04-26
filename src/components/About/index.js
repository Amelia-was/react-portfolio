import React from 'react';

function About() {
    return (
        <section className='about flex align-center'>
            <img 
            className='portfolio-photo' 
            src={require('../../assets/imgs/portfolio-photo.JPG').default} alt='photo of Amelia'/>
            <p className='about-text'>Amelia Wasowski is a carpenter and aspiring web developer from Toronto. She is currently studying coding at UofT Coding Boot Camp.</p>
        </section>
    );
};

export default About;