import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'

const InputCount = ({ onConfirm, stock, initial=1 }) => {
  const [count, setCount] = useState(initial)
  
  const handleChange = (e) => {
    if(e.target.value <= stock ){
      setCount(e.target.value)
    }
  }
  return(
    <div>
      <input type='number' onChange={handleChange} value={count} />
      <button 
          className='btn btn-outline-info mt-3 text-dark mb-4'
          onClick={()=> onConfirm(count)}> 
          Agregar al carrito <i className="bi bi-bag-plus-fill text-info"></i>
      </button>

    </div>
  )
}
const ButtonCount = ({ onConfirm, stock, initial=1 }) => {

  const [count, setCount] = useState(initial)
  
  const incrementar = () =>{
      if(count < stock ){
          setCount (count + 1)
      }
  }
  const decrementar = () => {
      if(count > 1 ){
          setCount (count - 1)
      }
  }
  return(
    <div className='mt-5 d-flex justify-content-center'>
      <button onClick={decrementar} className='btn m-2 bg-danger text-white'> <i className="bi bi-dash"></i> </button>
      <h1> {count} </h1>
      <button onClick={incrementar} className='btn m-2 bg-success text-white'> <i className="bi bi-plus"></i> </button>
      <button 
          className='btn btn-outline-info mt-3 text-dark mb-4'
          onClick={()=> onConfirm(count)}> 
          Agregar al carrito <i className="bi bi-bag-plus-fill text-info"></i>
      </button>
    </div>
  )
}

const ItemDetail = ({ id, name, description, category, price, stock }) => {

  const[inputType, setInputType] = useState('button')
  const [quantityToAdd, setQuantityToAdd] = useState(0)

  const { addItem, getProductQuantity } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    console.log(`La cantidad agregada es: ${quantity} `)
    setQuantityToAdd(quantity)
    const productToAdd ={
      id, name, price, quantity
    }
    addItem(productToAdd)
  }
  const productQuantity = getProductQuantity(id)
  const Count = inputType === 'button' ? ButtonCount : InputCount;

  return (
    <>
    <div className='d-flex justify-content-center col-12'>
      <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}> {inputType === 'button' ? 'Pasar a input' : 'Pasar a button'} </button>
      <div className='card text-center'>
        <h5 className='card-header'> {name} </h5>          
        <h6 className='card-body'> 
          <p> Categoría: {category} </p> <hr/>
          {description} 
        </h6>
        <div className='card-footer'>        
          {
            quantityToAdd === 0 ? (
              <Count onConfirm={handleOnAdd} stock={stock} initial={productQuantity} />
            ) : (
              <Link to='/cart'> Finalizar compra </Link>
            )
          }

          {/* <ItemCount stock={27} onAdd={handleOnAdd} />  */}
        </div>
      </div>

    </div>
    </>
  )
}

export default ItemDetail;