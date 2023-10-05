import logo from './logo.svg';
import './App.css';
import ListaLibros from './components/ListaLibros';
import {libros} from './data/libros';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AcercaDe from './components/AcercaDe';
import PaginaNotFound from './components/PaginaNotFound';

function App() {
  return (
    <>
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaLibros libros={libros}/>}/>
          <Route path="/acerca-de" element={<AcercaDe/>}/>
          <Route path="/*" element={<PaginaNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
