const Item = ({ product }) => {

  return (
    <>
        <div className='tarjetas shadow'>
            <img src={product.img} alt="" id='img-tarjeta' className='m-3' />  
            <div className=' m-3'>                
                <h6> {product.name}
                    <br/>
                    <hr/>
                </h6>                
                <p> 
                    Categoría: {product.category} <br />                     
                    Precio: {product.price} 
                    <hr/>
                    <button className="boton"> Ver detalles </button>
                </p>
            </div>                                                
        </div>   
    </>
  )
}

export default Item