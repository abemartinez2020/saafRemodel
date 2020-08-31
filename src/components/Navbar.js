import React, {useState, useContext} from 'react';
import  logo from '../imgs/white_logo.png';
import hamburger from '../imgs/hamburger_icon.png';
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import {saafAuth } from '../firebase/config';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const {auth, setAuth} =useContext(AuthContext);
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

    const signOutHandler = () => {
        saafAuth.signOut()
        .then((response) => {
            setAuth(false);
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        
        <nav id ="navigation" className = {navbar ? 'nav-scrolled' : 'nav'}>
            <Link to ="/">
                <img className = "nav-icon" src = {logo} alt = " Grupo SAAF logo"/>
            </Link>
            {auth ? <button id = "exitButton" onClick = {signOutHandler} >Salir</button> : null}
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