import React from 'react';
import './contactMe.css'
const contactImg = require('../../assets/images/contactImg.png')

const ContactMe = () => {
    return (
        <section className='contactMe flex-center'>
            <h2>Contact Me</h2>
            <button><h4>I am always ready for new communication!
                Please let me know about your thoughts!</h4></button>
            <div className="container flex-space-btw">
                <div className="contact-form">
                    <h4>Your email</h4>
                    <input type="text"/>
                    <h4>Your message</h4>
                    <textarea/>
                </div>
                <img src={contactImg} alt=""/>
            </div>
        </section>
    );
};

export default ContactMe;