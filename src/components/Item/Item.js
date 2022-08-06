import { Link } from "react-router-dom"
import './Item.css'

const Item = ({ id, img, name, category, price }) => {

  return (
    <>
        <div className='tarjetas shadow' key={id}>
            <img src={img} alt="" id='img-tarjeta' className='m-3' />  
            <div className=' m-3'>                
                <h6> {name}  </h6>                
                <p> 
                    Categoría: {category} <br />                     
                    Precio: {price} 
                    <Link to={`/detail/${id}`} className="mt-3 btn bg-warning btn-sm"> Ver detalles </Link>
                </p>
            </div>                                                
        </div>   
    </>
  )
}

export default Item
