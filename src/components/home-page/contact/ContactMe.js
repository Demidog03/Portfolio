import React, {useRef} from 'react';
import './contactMe.css'
const contactImg = require('../../../assets/images/contactImg.png')
const bubbleVector = require('../../../assets/images/contactVector.png')

const ContactMe = () => {
    const emailRef = useRef()
    const messageRef = useRef()
    let contactInfo = {}

    const handleSubmit = (e) => {
        e.preventDefault()
        contactInfo = {
            email: emailRef.current.value,
            message: messageRef.current.value
        }

        const config = {
            SecureToken: '790136fb-5471-4180-a461-74fb4f95eeaf',
            To : "o.otep@mail.ru",
            From : contactInfo.email,
            Subject : "Message from contact form!",
            Body : contactInfo.message
        }

        if(window.Email) {
            window.Email.send(config).then(
                message => message==='OK' ? alert('Message sent! Thank you!') : alert(message)
            );
        }
    }

    return (
        <section className='contactMe flex-center'>
            <h2>Contact Me</h2>
            <button><h4>I am always ready for new communication!
                Please let me know about your thoughts!</h4>
                <img className='vector' src={bubbleVector} alt=""/>
            </button>
            <div className="container flex-space-btw">
                <form onSubmit={handleSubmit} className="contact-form">
                    <h4>Your email</h4>
                    <input
                        ref={emailRef}
                        className='email'
                        type="text"/>
                    <h4>Your message</h4>
                    <textarea ref={messageRef} />
                    <input className='submit' type="submit" value='Send'/>
                </form>
                <img src={contactImg} alt=""/>
            </div>
        </section>
    );
};

export default ContactMe;