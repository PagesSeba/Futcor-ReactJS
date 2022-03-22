import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <div>
          <NavBar></NavBar>
        </div>
        <ItemListContainer bienvenida="Bienvenidos a Futcor!" subtitulo="Indumentaria de los cuatro grandes de Córdoba Capital!"/>
    
    
    
    </div>
  );
}

export default App;
