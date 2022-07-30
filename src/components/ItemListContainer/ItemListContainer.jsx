import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';
import { getProducts } from '../../simulacionApi';
import ItemList from '../ItemList/ItemList';

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
        <ItemList products={products} />
        
    </>
  )
}

export default ItemListContainer;