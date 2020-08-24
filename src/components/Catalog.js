import React from 'react';

const Catalog = () => {
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


            
        </div>
        
    )
}

export default Catalog;