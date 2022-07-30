import Inicio from "./components/Inicio/Inicio";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css';

function App() {
  return (
    <>
      <Navbar />     
      <Inicio />      
      <ItemListContainer greeting='Oriana, ¡Bienvenida a Multi Market! ' />

    </>
  );
}

export default App;
