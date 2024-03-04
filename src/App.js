import logo from './logo.svg';
import TiraPeliculas from "./components/TiraPeliculas"
import Saludo from './components/Saludo';
import ContenedorPublicidad from './components/ContenedorPublicidad';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <main>
      <ContenedorPublicidad>
      <h2>Wowww! Publicidad!</h2>
      </ContenedorPublicidad>
      <TiraPeliculas/>
      <TiraPeliculas/>
      <TiraPeliculas/>    
      <Saludo titulo = "Hola mundo" subtitulo = "¡Nunca paremos de aprender!"/>    
      <ContenedorPublicidad>
      <ul>
      <li>Public1</li>
      <li>Public2</li>
      <li>Public3</li>
      </ul>
      </ContenedorPublicidad>
  

      </main>
  
    </div>
  );
}

export default App;
