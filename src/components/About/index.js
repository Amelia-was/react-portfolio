import React from 'react';

function About() {
    return (
        <section className='about flex align-center'>
            <img 
            className='portfolio-photo' 
            src={require('../../assets/imgs/amelia-headshot.png').default} alt='Amelia Wasowski'/>
            <p className='about-text'>Amelia Wasowski is a Coding Boot Camp grad looking to break into the web development industry.</p>
        </section>
    );
};

export default About;