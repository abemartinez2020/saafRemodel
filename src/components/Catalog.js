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
                    <input type = "text" placeholder = "Buscar Producto"/>
                    <input type = "text" placeholder = "filtro"/>
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