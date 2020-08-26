import React from 'react';
import saafAuth from '../firebase/config';

const AdminLogin = () => {
    const onClickHandler = () => {
        console.log("logged in")
    }
    return(
        <div>
            <header className = "hero-section hero-section-admin">
            
            <div className = "hero-section-text">
                <h1>Administrador</h1>
            </div>  
           
                <div className = "menu-options">
                    <input id =  'admin-email' type = "email" placeholder = "Correo Electronico"/>
                    <input id = "admin-password" type = "password" placeholder = "Contraseña"/>
                   
                    <button type = "submit" onClick = {onClickHandler} name = "ingresar"> Ingresar</button>
                   
                </div>
            
        </header>
        </div>
    )
}

export default AdminLogin;