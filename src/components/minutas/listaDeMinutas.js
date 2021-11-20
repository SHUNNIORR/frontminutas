import React from 'react'

const listaDeMinutas = (data) => {
    return (
        <ul className="list-minutas">
          {data.map((minuta) => (
            <li key={minuta.id}>
              <div className="card-container">
                <div className="card-header">
                  <div className="header-id">
                    <p>id:</p>
                    <p>{minuta.id}</p>
                  </div>
                  <div className="header-name">
                    <p>Nombre:</p>
                    <p>{minuta.nombre}</p>
                  </div>
                  <div className="header-dateTurn">
                    <p>Fecha: {minuta.fecha}</p>
                    <p>Turno: {minuta.turno}</p>
                  </div>
                </div>
                <div className="card-body">
                  <div className="body-description">
                    <p>Descripción:</p>
                    <p>{minuta.descripcion}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
    )
}

export default listaDeMinutas
