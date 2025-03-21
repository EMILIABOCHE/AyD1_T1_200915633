import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [info, setInfo] = useState('');

  const handleClick = () => {
    setInfo('Nombre: Emilia | Carnet: 12345678 | Curso: React Development');
  };

  return (
    <div className=".container-fluid text-center mt-5">
      <h1 className="mb-4">Bienvenida a Tarea 2</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Mostrar Información
      </button>
      {info && <p className="alert alert-info mt-3">{info}</p>}
    </div>
  );
}

export default App;
