import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <div>
          <NavBar></NavBar>
        </div>
        <ItemListContainer bienvenida="Bienvenidos a Futcor!" subtitulo="Indumentaria de los cuatro grandes de Córdoba Capital!"/>
        <ItemDetailContainer/>
    
    
    </div>
  );
}

export default App;
