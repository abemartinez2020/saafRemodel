import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
            <div>
            <header className = "hero-section hero-section-contact">
            
            <div className = "hero-section-text">
                <h1>Contactanos</h1>
                <p>Te responderemos a la brevedad</p>
            </div>
            <ContactForm/>        
        </header>
        <div id ="contact-main">
        <p><strong> correo electrónico </strong>saafgrupo@gmail.com</p>
        </div>
    </div>
    )

}


export default Contact;