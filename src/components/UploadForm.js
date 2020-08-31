import React, {useState, useContext} from 'react';
import ProgressBar from './ProgressBar';
import ProductGrid from './ProductGrid';
import Modal from './Modal';
import {saafAuth } from '../firebase/config';
import {AuthContext} from '../context/AuthContext';
import { Route, Redirect } from 'react-router-dom';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [productDetails, setProductDetails] =useState(null); 
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const {auth, setAuth} =useContext(AuthContext);
    
    const user = saafAuth.currentUser;
    console.log(user);

    const types = ['image/png', 'image/jpeg'];
    const getInputValue = (id) => document.getElementById(id);

 const  onSubmitHandler = (e) => {
     e.preventDefault();
    setProductDetails( {
        productName : getInputValue('nameProduct').value,
        productDesc : getInputValue('descProduct').value,
        productModel : getInputValue('modelProduct').value,
        productCategory : getInputValue('categoryProduct').value
     }
    )


    const productPhotos = getInputValue('photosProduct');
    let selected = productPhotos.files[0];

     if (selected && types.includes(selected.type)) {
         setFile(selected);
         setError('');
     } else {
         setFile(null);
         setError('Por favor sube fotos (png or jpeg)');
     }
    }
    
    return(
        <div className = "uploadPage">
            <Route exact path = "/admin/uploadform">
            {!auth || !user ? <Redirect to = "/"/> : null}
             </Route>
            
            <header className = "hero-section hero-section-upload">
            
            <div className = "hero-section-text hero-section-uploadtxt">
            <form id = "uploadForm" className = "hero-section-form" onSubmit = {onSubmitHandler }>
                <h1>Administracion de Catalogo</h1>
                <label htmlFor = "nameproduct"> Nombre del Producto</label>
                <input id = "nameProduct" type = "text" name = "nameProduct"/>
                <label htmlFor = "descProdcut">Descripcion del Producto</label>
                <textarea id = "descProduct" name = "descProduct"></textarea>
                <label htmlFor = "modelProduct">Modelo</label>
                <input id = "modelProduct" name = "modelProduct"/>
                <label htmlFor = "categoryProduct">Categoria del Producto</label>
                <select id = "categoryProduct" name = "categoryProduct">
                    <option value = "selecionar"></option>
                    <option value = "guantes">Guantes</option>
                    <option value = "cubrebocas">Cubrebocas</option>
                    <option value = "batas">Batas</option>
                </select>
                <label htmlFor = "photosProduct" type = "file">
                <i className = "material-icons">add_a_photo</i>&nbsp;&nbsp;
                Subir Fotos del Producto</label>
                <input id = "photosProduct" type = "file" accept= "image/png image/jpeg" />
                <div className = "output">
                    { error && <h6 className = "error" > {error} </h6>}
                    { file && <h6 > {file.name} </h6>}
                    { file && <ProgressBar file ={file} setFile = {setFile}  productDetails = {productDetails}/>}
                </div>

                <h6 className = "uploadMessage">
                </h6>
                <button onSubmit = {onSubmitHandler }> Agregar</button>

            </form>
            </div>
            </header>
            <div className = "productGallery">
                <ProductGrid setSelectedImg = {setSelectedImg} setSelectedProduct = {setSelectedProduct}/>
                {selectedImg &&
                    <Modal selectedImg ={selectedImg}  selectedProduct = {selectedProduct} setSelectedImg = {setSelectedImg}/>
                }
            </div>
        </div>

    )
}

export default UploadForm;