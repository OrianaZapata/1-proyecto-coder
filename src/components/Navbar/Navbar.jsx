import React from 'react';
import Logo from '../../images/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <>   
        <nav className='navbar p-4 d-flex justify-content-center fixed-top'>    
            <img src={Logo} alt="" width='65' height='65' className='logo' />
            <div>
              <button type='button' className='btn'> Vitaminas para adultos</button>
              <button type='button' className='btn'> Vitaminas para niños </button>
              <button type='button' className='btn'> <i className="bi bi-person-lines-fill"></i> Contacto</button>            
            </div> 
        </nav>
    </>
  )     
}

export default Navbar;