import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';
import { getProducts } from '../../simulacionApi';

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(()=>{
    getProducts().then(products => {
      setProducts(products);
    })
  }, [])


  return (
    <>
        <h1> {greeting} </h1>               
        {products.map(prod => 
        <div className='container contenedor-cards'>
          <div className='col-2'>  
            <div className='row'>
              <div className='card' key={prod.id}> 
                  <h5 className='card-header'>{prod.name} </h5>
                  <div className='card-body'>
                    <h6> {prod.description} </h6>
                    <p> Precio: {prod.price} </p>
                    <p> Categoría: {prod.category} </p>
                  </div>    
                  <div className='card-footer'>
                    <button className='btn btn-primary d-flex justify-content-center'> Ver más </button>
                  </div>            
              </div>
            </div>
          </div>
        </div>
      )} 
        
    </>
  )
}

export default ItemListContainer;