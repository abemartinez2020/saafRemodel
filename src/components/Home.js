import React from 'react';
import about from '../imgs/about.png';
import mission from '../imgs/mission.png';
import vision from '../imgs/vision.png';
import {Link, NavLink} from 'react-router-dom';
import ContactForm from './ContactForm';


const Home = () => {
    return (
        <div className = "home">
            <header className = "hero-section">
            
            <div className = "hero-section-text">
                <h1 id = "home-title">Cuidamos tu Bienestar</h1>
                <p>venta de productos sanitarios </p>
                <button><Link to = "/catalogo">CATALAGO</Link></button>
                <p>envio a toda la Republica</p>
            </div>
            <ContactForm/>
        </header>

        <main>
            <div className = "about">
                <div className = "about-img">
                    <img src = {about}/>
                    <h2>Grupo SAAF Productos Sanitarios</h2>
                </div>
                <div className = "about-text">
                    
                    <p> Somos distribuidor con más de 10 años de experiencia en el mercado Médico Hospitalario, brindamos el servicio de comercialización y distribución de material de curación, dental, ortopedia e instrumental médico.</p>
                    <p> Grupo SAAF es una empresa mexicana. Competitiva diseñada para su crecimiento de acuerdo a su requerimiento con experiencia, infraestructura y capacidad para dar una atención de calidad basada en respeto, honestidad y confiabilidad, con un equipo de trabajo comprometido y eficaz.</p>
                    <p>Todo lo que necesite en la forma de comercialización que requiera bajo un esquema de precios verdaderamente competitivos.</p>
                </div>
            </div>
            <div className = "about">
                <div className = "about-img">
                    <img src = {mission}/>
                    <h2>MISIÓN</h2>
                </div>
                <div className = "about-text">
                    
                    <p> Ser una empresa reconocida en el sector médico, contribuyendo a la salud, con servicio y calidad, brindando a nuestros clientes una atención especializada que les permita resolver sus necesidades y mejorar su calidad de vida.</p>
                </div>
            </div>
            <div className = "about">
                <div className = "about-img">
                    <img src = {vision}/>
                    <h2>VISIÓN</h2>
                </div>
                <div className = "about-text">
                    
                    <p> Convertirnos para el 2020 en la empresa a nivel Nacional e Internacional más importante de sector salud en la venta y distribución de productos médicos, logrando la total satisfacción de nuestros clientes consumidores por nuestra atención personalizada y respuesta inmediata.</p>
                </div>
            </div>
        </main>
        </div>
        
    )
}

export default Home;