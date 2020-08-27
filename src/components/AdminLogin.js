import React, {useState} from 'react';
import UploadForm from './UploadForm';
import {saafAuth } from '../firebase/config';
import { Route, Redirect } from 'react-router-dom';


const AdminLogin = (props) => {

    const [loginAuth, setLoginAuth] = useState(false);

    const onClickHandler = () => {
        const email = document.querySelector('#admin-email').value;
        const password = document.querySelector('#admin-password').value;
        saafAuth.signInWithEmailAndPassword(email, password)
        .then((response) => {
            setLoginAuth(true);
        }).catch((error) => {
            console.log(error)
            setLoginAuth(false);
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
            {loginAuth ? <Redirect to = "/admin/uploadform"/> : null}
        </Route>
        </header>

   
        </div>
    )
}

export default AdminLogin;