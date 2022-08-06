import React from 'react'

const ItemDetail = ({ name, description }) => {
  return (
    <>
    <div className='text-center'>
      <h5> {name} </h5>  
      <h6> {description} </h6>
    </div>
    </>
  )
}

export default ItemDetail;