import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
        {products.length === 0 && <p className="d-flex justify-content-center"> Cargando productos <i className="bi bi-arrow-clockwise"></i> </p>}    
        <br/>
        <ul className="contenedor-tarjetas">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    </>
  )
}

export default ItemList