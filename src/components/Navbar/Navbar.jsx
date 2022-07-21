import React from 'react';
import Logo from '../../images/logo.png';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';

const Navbar = () => {

  return (
    <>   
        <nav className='navbar p-4 d-flex justify-content-center'>    
            <img src={Logo} alt="" width='65' height='65' className='logo' />
            <div>
              <Button label='Vitaminas para adultos' /> 
              <Button label='Vitaminas para niños' />   
              <Button label='Contacto'  /> 
            </div> 
            <CartWidget />
        </nav>
    </>
  )     
}

export default Navbar;