import React from 'react';
import "./precentacion.css"
import img from "../../imagenes/pexels-dorota-semla-8969237.jpg";
const Precentacion = () => {
    return (
        <div>
            <div className="precentacion_contenedor">
                <div className='homeBg'>
                    <img className='imgBg' src={img} alt="imagenprecentacion" />

                </div>
                <div className = 'homeContent'>
                    <h1 className='home-h1'>Bienbenidos a el restaurante de comida italiana</h1>
                    <p className='home-p1'>Disfruta de nuestra deliciosa pasta italiana en nuestro restaurante ubicado en la ciudad de </p>
                </div>
            </div>
        </div>
    );
}

export default Precentacion;
