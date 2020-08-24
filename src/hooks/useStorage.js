import { useState, useEffect } from 'react';
import  { saafStorage, saafFirestore, timestamp } from '../firebase/config';

const useStorage = (file, {productName, productDesc, productModel, productCategory}) => {
    const [ progress, setProgress ] =useState(0);
    const [ error, setError ] = useState(null);
    const [url, setUrl ] = useState(null);

    useEffect(() => {
        //references
        const storageRef = saafStorage.ref(file.name);
        const collectionRef = saafFirestore.collection('products')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) *100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ 
                productName, 
                productDesc, 
                productCategory, 
                productModel, 
                url, 
                createdAt
            })
            setUrl(url);
        } )
    }, [file])

    return {progress, url, error };
}

export default useStorage;