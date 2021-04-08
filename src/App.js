import logo from './logo.svg';
import './App.css';
import Navegacion from './Navegacion';


function Saludo(){
  return(
    <h1>Mi Primera App en React</h1>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Navegacion/> {/* llamo a la funcion navigation que esta en navigation.js */}
        <img src={logo} className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Saludo/> {/* llamo a la funcion saludo */}
        


      </header>
    </div>
  );
}

export default App;
