import React , { useState } from 'react';
import ProductGrid from './ProductGrid';
import Modal from './Modal';

const Catalog = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filteredProduct, setFilteredProduct] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
       if(e.target.name === 'buscar') {
        setFilteredProduct({
            productSearched: document.querySelector('#productSearched').value,
            catalogCategory: document.querySelector('#catalogCategory').value
        })
       } else if (e.target.name === "borrar") {
           setFilteredProduct('');
       }
       
    }
    return (
        <div className = "catalog">

        <header className = "hero-section hero-section-catalog">
            
            <div className = "hero-section-text">
                <h1>Catalogo</h1>
                <p>Amplia gama de productos para el sector medico.</p>
            </div>  
           
                <div className = "menu-options">
                    <input id= "productSearched" type = "text" placeholder = "Nombre del Producto"/>
                    <select id ="catalogCategory">
                        <option value = "Categoria">Categoria</option>
                        <option value = "guantes">Guantes</option>
                        <option value = "cubrebocas">Cubrebocas</option>
                        <option value = "batas">Batas</option>
                    </select>
                    <button type = "submit" onClick = {onSubmitHandler} name = "buscar"> Buscar</button>
                    <button id ="filterClear" onClick = {onSubmitHandler} name = "borrar"> Borrar</button>
                </div>
            
        </header>
        <div className = "productGallery">
                <ProductGrid setSelectedImg = {setSelectedImg} setSelectedProduct = {setSelectedProduct} filteredProduct = {filteredProduct}/>
                {selectedImg &&
                    <Modal selectedImg ={selectedImg}  selectedProduct = {selectedProduct} setSelectedImg = {setSelectedImg}/>
                }
            </div>

            
        </div>
        
    )
}

export default Catalog;