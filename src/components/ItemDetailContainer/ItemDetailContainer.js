import React, { useEffect, useState } from 'react'
import { getProductById } from '../../simulacionApi'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const { id } = useParams()

    useEffect(()=>{
        getProductById(id)
        .then(product => {
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
    }, [id])
    return (
    <>   
        <h4 className='mt-5 title-detail'> Detalle </h4>
        <ItemDetail {...product} />
    </>
  )
}

export default ItemDetailContainer