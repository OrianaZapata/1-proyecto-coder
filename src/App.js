import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  
  return (
    <>
    <Router>
    <Navbar />     
      <Routes>
        {/* <Inicio />  */}
        <Route path='/' element={ <ItemListContainer greeting='Listado de todos los productos'/> } /> 
        <Route path='/detail/:id' element={ <ItemDetailContainer /> } /> 
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado' />}/>
        <Route path='*' element={ <h1> 404. PÁGINA NO ENCONTRADA </h1>} />
        {/* <MercadoLibre/>  */}
      </Routes>
    </Router>
    </>
  );
}

export default App;