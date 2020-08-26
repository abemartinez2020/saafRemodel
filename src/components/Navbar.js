import React, {useState, useEffect} from 'react';
import  logo from '../imgs/white_logo.png';
import hamburger from '../imgs/hamburger_icon.png';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const handlehamburger = (e) => {
        console.log(e.target)
        const navMenu = document.querySelector('.sidebar');
       
            navMenu.classList.toggle('sidebarToggle'); 
    }

    const navBackground = () => {
      if (window.scrollY >=40) {
          setNavbar(true)
      } else {
          setNavbar(false);
      }
    }

    window.addEventListener('scroll', navBackground)
    return (
        
        <nav id ="navigation" className = {navbar ? 'nav-scrolled' : 'nav'}>
            <Link to ="/">
                <img className = "nav-icon" src = {logo} alt = " Grupo SAAF logo"/>
            </Link>
            <button id = "exitButton">Salir</button>
            <img className = "nav-hamburger" src = {hamburger} alt = "hamburger icon" onClick = {handlehamburger}/>
            <div className = "sidebar">
                <ul>
                    <li className = "nav-text" onClick = {handlehamburger}><Link to = "/">INICIO</Link></li>
                    <li className = "nav-text" onClick = {handlehamburger}><Link to = "/catalogo">CATALOGO</Link></li>
                    <li className = "nav-text" onClick = {handlehamburger}><Link to = "/contactanos">CONTACTANOS</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;