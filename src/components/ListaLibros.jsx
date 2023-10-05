const ListaLibros = ({libros}) => {
    return (
        <>
            <h1>Mini Catalogo de Libros</h1>
            <div className="book-grid">
                {
                    libros.map((libro)=>(
                        <div key={libro.id} className="book-card">
                            <div className="book-title">{libro.titulo}</div>
                            <div>{libro.autor}</div>
                            <div>{libro.categoria}</div>
                            <div>{libro.descripcion}</div><br/>
                        </div>
                    ))
                }
            </div>
        </>
    )
} 

export default ListaLibros;