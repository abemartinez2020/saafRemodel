import React, {useState} from 'react';
import ProgressBar from './ProgressBar'

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];
 const  changeHandler = (e) => {
     let selected = e.target.files[0];

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
            
            <header className = "hero-section hero-section-upload">
            
            <div className = "hero-section-text hero-section-uploadtxt">
            <form id = "uploadForm" className = "hero-section-form">
                <h1>Administracion de Catalogo</h1>
                <label htmlFor = "nameproduct"> Nombre del Producto</label>
                <input id = "nameProduct" type = "text" name = "nameProduct"/>
                <label htmlFor = "descProdcut">Descripcion del Producto</label>
                <textarea name = "descProduct"></textarea>
                <label htmlFor = "modelProduct">Modelo</label>
                <input id = "modelProduct" name = "modelProduct"/>
                <label htmlFor = "categoryProduct">Categoria del Producto</label>
                <select id = "categoryProduct" name = "categoryProduct">
                    <option value = "select"></option>
                    <option value = "guantes">Guantes</option>
                    <option value = "cubrebocas">Cubrebocas</option>
                    <option value = "batas">Batas</option>
                </select>
                <label htmlFor = "photosProduct" type = "file">
                <i className = "material-icons">add_a_photo</i>&nbsp;&nbsp;
                Subir Fotos del Producto</label>
                <input id = "photosProduct" type = "file" accept= "image/png image/jpeg" onChange ={changeHandler} />
                <div className = "output">
                    { error && <h6 className = "error" > {error} </h6>}
                    { file && <h6 > {file.name} </h6>}
                    { file && <ProgressBar file ={file} setFile = {setFile} />}
                </div>

                <h6 className = "uploadMessage">
                </h6>
                <button> Agregar</button>

            </form>
            </div>
            </header>
            <div className = "productGallery"></div>
        </div>

    )
}

export default UploadForm;