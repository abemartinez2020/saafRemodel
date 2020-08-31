import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [auth, setAuth] = useState(false);
    
    const AuthHandler = (auth) => {
        setAuth(auth);
    }

    return (
    <AuthContext.Provider value = {{auth, setAuth}}>
            {props.children}
    </AuthContext.Provider>
    )
    
}

export default AuthContextProvider;