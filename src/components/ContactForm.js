import React from 'react';

const ContactForm = () => {
    return (
            <form className = "hero-section-form">
            <input type = "text" placeholder = "Nombre" required/>
            <input type = "email" placeholder = "Correo Electronico" required/>
            <input type = "text" placeholder = "Telefono"/>
            <textarea placeholder = "Mensaje" cols = "25"></textarea>
            <button>Enviar</button>
        </form>
    )
}

export default ContactForm;