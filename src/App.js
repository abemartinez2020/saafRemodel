import React from 'react';
import './App.css';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UploadForm from './components/UploadForm';
import AdminLogin from './components/AdminLogin';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContextProvider>
          <Navbar/>
          <Route exact path = "/" component = {Home} />
          <Route path ="/catalogo" component = {Catalog} />
          <Route path = "/contactanos" component = {Contact}/>
          <Route exact path = "/admin" component = {AdminLogin}/>
          <Route path = "/admin/uploadform" component = {UploadForm}/>
          <Footer/>
          </AuthContextProvider>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
