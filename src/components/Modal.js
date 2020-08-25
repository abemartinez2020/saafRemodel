import React from 'react';


const Modal = ({selectedImg, selectedProduct, setSelectedImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
        
    }
    return (
        <div className = "backdrop" onClick = {handleClick}>
            <div className = "product-container"> 
                <div className = "img-container">
                    <img src = {selectedImg} alt ="enlarged pick"/>
                </div>
                
                <h4>{selectedProduct.productName}</h4> 
                <p><strong>Modelo:</strong>{' ' + selectedProduct.productModel}</p>
                <p><strong>Descripcion:</strong>{' ' + selectedProduct.productDesc}</p>
                <p><strong>Categoria:</strong>{' ' + selectedProduct.productCategory}</p>
                
            </div>
        </div>
        
    )
}

export default Modal;