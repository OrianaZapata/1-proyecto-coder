import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from './components/Contacto/Contacto';
import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {


  return (
    <>
    <Router>
    <Navbar />     
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Listado de todos los productos'/> } /> 
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado' />}/>
        <Route path='/detail/:productId' element={ <ItemDetailContainer /> } /> 
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='*' element={ <h1> 404. PÁGINA NO ENCONTRADA </h1>} />
        <Route path='ml'  element={<MercadoLibre/>} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;