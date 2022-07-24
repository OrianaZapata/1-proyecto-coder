import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Counter from '../Counter/Counter';
import './inicio.css';

const Inicio = () => {

  const [show, setShow] = useState(false);

  const handleOnAdd = (quantity) => {
    console.log(`La cantidad agregada es: ${quantity} `)
  }

  return (
    <>
        <section className='contenedor'>
            {/* <ItemListContainer greeting='Oriana, ¡Bienvenida a Multi Market! ' /> */}
          <button
              className='btn mt-2 bg-warning'
              onClick={()=> setShow (!show)}
              >
              {show ? 'Ocultar contador' : 'Mostrar contador'}
          </button>
          
          {show 
            ? 
            <Counter stock={27} onAdd={handleOnAdd} /> 
            : 
            null
          }

        </section>
        <Footer />
    </>
  )
}

export default Inicio;