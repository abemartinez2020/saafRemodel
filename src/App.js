import React from 'react';
import './App.css';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UploadForm from './components/UploadForm';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Route exact path = "/" component = {Home} />
          <Route path ="/catalogo" component = {Catalog} />
          <Route path = "/contactanos" component = {Contact}/>
          <Route path = "/admin/uploadform" component = {UploadForm}/>
          <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
