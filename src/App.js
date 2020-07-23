import React, { useState, useEffect } from 'react';
import Formulario from "./components/Formulario";

function App() {

  const [busqueda, setBusqueda] = useState("");
  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 30;
      const key = "17612582-3fd67665bc6afd3f6b6a62b89";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&_per_page=${imagenesPorPagina}`;

      const response = await fetch(url);
      const result = await response.json();

      setBusqueda(result);
    }
    consultarApi();

  }, [busqueda])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Images</p>
        <Formulario
          setBusqueda={setBusqueda}
        />
      </div>
    </div>
  );
}

export default App;
