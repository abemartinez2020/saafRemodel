import React from  'react';
import useFirestore from '../hooks/useFirestore';

const ProductGrid = ({setSelectedImg}) => {
    const { docs } = useFirestore('products');
    console.log(docs);
    return (
        <div className = "product-list">
            <div className = "product-grid"> 
                { docs && docs.map(doc => (
                        <div className = "product-card" key = {doc.id} onClick = {() => setSelectedImg(doc.url)}> 
                            <div className = "product-img">
                                <img src = {doc.url} alt = {doc.productName}/>
                            </div>
                            <h3>{doc.productName}</h3>
                        </div>
                ))}
            </div>
    
    </div>
    )

}

export default ProductGrid;