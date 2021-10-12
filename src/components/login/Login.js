import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import vigilantes from '../../assets/vigilantes.mp4';

export const Login = () => {
  let history = useHistory();
  const [form, setForm] = useState({
    usuario: "",
    contraseña: "",
  });
  const {usuario, contraseña}=form;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    history.push('/admin');
  };
  
  return (
    <>
      <div className="contenedor-login">
        <div className="contendor-video">
          <video src={vigilantes} autoPlay loop muted></video>
        </div>
        <div className="card-login fade-in-up">
          <div className="card-header">
            <h1>Minutas web</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Correo</label>
              <input
                name="usuario"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingresa Email"
                onChange={handleChange}
                value={usuario}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input
                name="contraseña"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Ingresa Contraseña"
                onChange={handleChange}
                value={contraseña}
              />
            </div>
            <div class="submit-container">
              <button type="submit" class="btn btn-primary btn-submit">
                Ingresar
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
};
