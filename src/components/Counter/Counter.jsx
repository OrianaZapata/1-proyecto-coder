import React from 'react';
import { useState } from 'react';
import './counter.css';

const Counter = ({ stock, onAdd }) => {

    const [count, setCount] = useState(0);
  
    const incrementar = () =>{
        if(count < stock ){
            setCount (count + 1)
        }
    }
    const decrementar = () => {
        if(count > 0 ){
            setCount (count - 1)
        }
    }

  return (
    <>
        <div className='counter'>       
            <div className='mt-5'>
                <h1> {count} </h1>
                <button onClick={decrementar} className='btn m-2 bg-danger text-white'> Decrementar <i className="bi bi-dash"></i> </button>
                <button onClick={incrementar} className='btn m-2 bg-success text-white'> Incrementar <i className="bi bi-plus"></i> </button>
            </div>
            <div>
                <button 
                    className='btn btn-outline-info mt-3 text-dark'
                    onClick={()=> onAdd(count)}
                    > 
                    Agregar al carrito <i className="bi bi-bag-plus-fill text-info"></i>
                </button>
            </div>
        </div>
    </>
  )
}

export default Counter;