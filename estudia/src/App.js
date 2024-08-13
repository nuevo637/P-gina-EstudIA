import logo from './logo.svg';
import './App.css';
import { Acerca } from './components/acerca/Acerca';
import { Inicio } from './components/inicio/Inicio';
import { Beneficiarios } from './components/beneficiarios/Beneficiarios';
import { Footer } from './components/footer/Footer';
import { Nav } from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Inicio></Inicio>
      <Acerca></Acerca>  
      <Beneficiarios></Beneficiarios>
      <Footer></Footer>
    </div>
  );
}

export default App;
