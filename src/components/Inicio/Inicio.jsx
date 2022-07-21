import React from 'react';
import Logo from '../../images/logo.png';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './inicio.css';

const Inicio = () => {
  return (
    <>
        <section className='contenedor'>   
            <ItemListContainer greeting='Oriana,' />  
            <h1 className='mb-5'> Bienvenida a Multi Market </h1>           
            <img src={Logo} alt="" width='120' />     
            <div>
                <div className='redes-sociales'>
                    <p> También puedes encontrarnos en nuestras redes sociales</p>
                    <div className='iconos'> 
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-twitter"></i>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default Inicio