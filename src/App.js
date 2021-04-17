import logo from './logo.svg';
import './App.css';
import Navegacion from './Componentes/Navegacion';
import Pepe from './Componentes/Pepe';
import Contador from './Componentes/EjercicioClase5';
import Api from './Componentes/Api';


function Saludo() {
  return (
    <h1>Mi Primera App en React</h1>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navegacion /> {/* llamo a la funcion Navegacion() que esta en Navegacion.js */}

        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        
        <Saludo /> {/* llamo a la funcion Saludo() definida arriba */}
        <Pepe dato="Soy el componente de tipo Clase" />  {/* llamo a la clase Pepe con el parametro dato */}
        <Contador/>
        <Api/>
      </header>
    </div>
  );
}

export default App;
