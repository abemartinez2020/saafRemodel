import React , { useState } from 'react';
import ProductGrid from './ProductGrid';
import Modal from './Modal';

const Catalog = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    return (
        <div className = "catalog">

        <header className = "hero-section hero-section-catalog">
            
            <div className = "hero-section-text">
                <h1>Catalogo</h1>
                <p>Amplia gama de productos para el sector medico.</p>
            </div>  
           
                <div className = "menu-options">
                    <input type = "text" placeholder = "Nombre del Producto"/>
                    <select id ="catalogCategory">
                        <option value = "Categoria">Categoria</option>
                        <option value = "guantes">Guantes</option>
                        <option value = "cubrebocas">Cubrebocas</option>
                        <option value = "batas">Batas</option>
                    </select>
                    <button> Buscar</button>
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

export default Catalog;