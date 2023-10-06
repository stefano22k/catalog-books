import { useState } from "react";
import { Link } from "react-router-dom";
import FormularioAgregarLibro from "./FormularioAgregarLibro";

const ListaLibros = ({libros}) => {
    const [categoria, setCategoria] = useState("");

    const [listaLibros, setListaLibros] = useState(libros);

    const agregarLibro = (nuevoLibro) => {
        setListaLibros([...listaLibros, nuevoLibro]);
    }

    const librosFiltrados = listaLibros.filter(libro => libro.categoria === categoria || !categoria);
    return (
        <>
            <h1>Formulario Nuevo Libro</h1>
            <FormularioAgregarLibro agregarLibro={agregarLibro} />
            <h1>Mini Catalogo de Libros</h1>
            <label>Categoría: </label>
            <select onChange={(e) => setCategoria(e.target.value)}>
            <option value="" key="0">Todos</option>
                <option value="Distopia">Distopia</option>
                <option value="Aventura">Aventura</option>
                <option value="Horror">Horror</option>
                <option value="Ficcion">Ficcion</option>
                <option value="Alegria">Alegria</option>
                <option value="Clasico">Clasico</option>
            </select>
            
            <div className="book-grid">
                {
                    librosFiltrados.map((libro)=>(
                        <div key={libro.id} className="book-card">
                            <div className="book-title">{libro.titulo}</div>
                            <div>{libro.autor}</div>
                            <div>{libro.categoria}</div>
                            <div>{libro.descripcion}</div><br/>
                            <Link to={`/libro/${libro.id}`} className="button">Ver más</Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
} 

export default ListaLibros;