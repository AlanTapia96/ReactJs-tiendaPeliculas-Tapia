import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Próximamente se agregarán las películas"/>
    </>
  );
}

export default App;
