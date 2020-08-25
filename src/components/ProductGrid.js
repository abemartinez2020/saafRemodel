import React from  'react';
import useFirestore from '../hooks/useFirestore';

const ProductGrid = ({setSelectedImg,setSelectedProduct}) => {
    const { docs } = useFirestore('products');
    console.log(docs);
    return (
        <div className = "product-list">
            <div className = "product-grid"> 
                { docs && docs.map(doc => (
                        <div className = "product-card" key = {doc.id} onClick = { () => {
                            return [
        
                                setSelectedImg(doc.url),
                                setSelectedProduct( {
                                    productName: doc.productName,
                                    productDesc: doc.productDesc,
                                    productModel: doc.productModel,
                                    productCategory: doc.productCategory
                                })
                            ]
                              

                        }}> 
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