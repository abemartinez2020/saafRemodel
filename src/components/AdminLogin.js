import React, {useState, useContext} from 'react';
import {saafAuth } from '../firebase/config';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const AdminLogin = (props) => {

    // const [loginAuth, setLoginAuth] = useState(false);
    const { auth, setAuth} = useContext(AuthContext)
    const onClickHandler = () => {
        const email = document.querySelector('#admin-email').value;
        const password = document.querySelector('#admin-password').value;
        saafAuth.signInWithEmailAndPassword(email, password)
        .then((response) => {
            setAuth(true);
        }).catch((error) => {
            console.log(error)
        })
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
            <Route exact path = "/admin">
            {auth ? <Redirect to = "/admin/uploadform"/> : null}
        </Route>
        </header>

   
        </div>
    )
}

export default AdminLogin;