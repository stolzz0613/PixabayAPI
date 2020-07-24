import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;
      const imagenesPorPagina = 30;
      const key = "17612582-3fd67665bc6afd3f6b6a62b89";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${pagina}`;

      const response = await fetch(url);
      const result = await response.json();

      setImagenes(result.hits);

      const calcularTotalPaginas = Math.ceil(
        result.totalHits / imagenesPorPagina
      );
      setTotalPaginas(calcularTotalPaginas);
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" })
    };
    consultarApi();
  }, [busqueda, pagina]);

  const paginaAnterior = () => {
    const nuevaPagina = pagina - 1;

    if (nuevaPagina === 0) return;
    setPagina(nuevaPagina);
  }

  const paginaSiguiente = () => {
    const nuevaPagina = pagina + 1;
    if (nuevaPagina > totalPaginas) return;
    setPagina(nuevaPagina);
  }



  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">Buscador de Images</h1>
        <Formulario setBusqueda={setBusqueda} />
      </div>
      
        <ListadoImagenes imagenes={imagenes} />
        <div className="row justify-content-center">
        {(pagina === 1) ? null : (
          <button
            type="button"
            className="btn btn-outline-info btn-lg mr-1"
            onClick={paginaAnterior}
          >&laquo; Anterior</button>
        )}

        {(pagina === totalPaginas) ? null : (
          <button
            type="button mx-auto"
            className="btn btn-outline-success"
            onClick={paginaSiguiente}
          >Siguiente &raquo;</button>
        )}
      </div>
    </div>
  );
}

export default App;
