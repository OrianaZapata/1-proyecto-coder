import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
        <footer className='footer'>                           
            <div className='redes-sociales mt-3'>
                <p> También puedes encontrarnos en nuestras redes sociales:</p>
                <div className='iconos'> 
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                </div>
            </div>               
        </footer>
    </>
  )
}

export default Footer;