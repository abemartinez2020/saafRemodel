import React from 'react';
// import {Link, NavLink} from 'react-router-dom';

const Contact = () => {
    return (
            <div>
            <header className = "hero-section hero-section-contact">
            
            <div className = "hero-section-text">
                <h1>Contactanos</h1>
                <p>Te responderemos a la brevedad</p>
            </div>
            <form className = "hero-section-form contactForm">
                <input type = "text" placeholder = "Nombre" required/>
                <input type = "email" placeholder = "Correo Electronico" required/>
                <input type = "text" placeholder = "Telefono"/>
                <textarea placeholder = "Mensaje" cols = "25"></textarea>
                <button>Enviar</button>
            </form>        
        </header>
        <div id ="contact-main">
        <p><strong> correo electrónico </strong>saafgrupo@gmail.com</p>
        </div>
    </div>
    )

}


export default Contact;