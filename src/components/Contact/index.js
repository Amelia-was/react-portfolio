import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';
import { FaEnvelope, FaPhone, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    };
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section className='flex column'>
            <p className='flex align-center'>

            <a href='https://www.linkedin.com/in/amelia-wasowski-78839a200/' className='icon-link' target='_blank'>
                <FaLinkedinIn className='icon' />
            </a>
                LinkedIn
            </p>
            <p className='flex align-center'>
                <a
                    className='icon-link'
                    href='mailto:amelia.wasow@gmail.com'>
                    <span class="material-icons">
                        email
                    </span> </a>
                            amelia.wasow@gmail.com
                    </p>
            <p className='flex align-center'>
                <a
                    className='icon-link'
                    href='tel:647-462-5332'>
                    <span class="material-icons">
                        phone
                    </span> </a>
                            (647) 462 5332
                    </p>
        </section>
    )
};

export default Contact;