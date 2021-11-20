import React from "react";
import "./registrar.css";

function Registrar() {
  return (
    <div className="contenedor-registrar">
      <div className="contenedor-form">
        <div className="header-form">
          <h2>Registrar novedad</h2>
        </div>
        <div className="body-form">
          <form className="form">
            <label> Registra tu Novedad:</label>
            <textarea></textarea>
            <div className="contenedor-toggle">
              <label>
                Fecha manual <strong>*(opcional)*</strong>:
              </label>
              <div>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
              <div>
                <input type="date" value="2021-10-28" disabled></input>
              </div>
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Registrar"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registrar;
