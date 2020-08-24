import React from 'react';
import logo from '../imgs/white_logo.png';
import {Link, NavlLnk} from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className = "footer-content">

                <Link to = "/"> <img src ={logo} /></Link>
                <p> © 2020 Todos los derechos Reservados por Grupo SAAF</p>
            </div>
          
        </footer>
    )
}

export default Footer;