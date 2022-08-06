import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';
import { getProducts, getProductByCategory } from '../../simulacionApi';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);

  const { category } = useParams()

  useEffect(()=> {

    const asyncFunction = category ? getProductByCategory : getProducts;
    asyncFunction(category).then(products => {
      setProducts(products)
    }).catch(error => {
      console.log(error)
    })
  }, [category])

  return (
    <>
        <h1 className='mt-5'> {greeting} </h1>               
        <ItemList products={products} />
        
    </>
  )
}

export default ItemListContainer;