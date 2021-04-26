import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';

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
        <section>
            <h2>Interested in working with me? Get in touch!</h2>
            <div className='flex align-center justify-between'>
                <form id='contact-form' onSubmit={handleSubmit}>
                    <div className='flex column justify-between'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
                    </div>
                    <div className='flex column justify-between'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                    </div>
                    <div className='flex column justify-between'>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" rows="5" onBlur={handleChange} defaultValue={message} />
                    </div>
                        <div className='flex align-center'>
                            <button type="submit">Submit</button>
                            {errorMessage && (
                                <p className="error-text">{errorMessage}</p>
                            )}
                        </div>
                </form>
                <div>
                    <p>
                        <a 
                        className='icon-link'
                        href='mailto:amelia.wasow@gmail.com'>
                            <i class="fas fa-envelope"></i> amelia.wasow@gmail.com
                        </a>
                    </p>
                    <p>
                        <a 
                        className='icon-link'
                        href='tel:647-462-5332'>
                            <i class="fas fa-phone"></i> (647) 462 5332
                        </a>
                </p>
                </div>
            </div>
        </section>
    )
};

export default Contact;