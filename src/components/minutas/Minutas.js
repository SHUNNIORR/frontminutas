import React,{useState} from "react";
import "./minutas.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Box from "@mui/material/Box";

function Minutas() {
    const [datePicker, setValue] = useState(new Date());
  const minutasList = [
    {
      id: 1,
      nombre: "Jorge Omar Perez Peñaranda",
      fecha: "15-11-2021",
      turno: "Mañana",
      descripcion: "Salió del conjunto la vecina del H-20",
    },
    {
      id: 2,
      nombre: "Jorge",
      fecha: "15-11-2021",
      turno: "Mañana",
      descripcion: "Salió del conjunto la vecina del H-20",
    },
    {
      id: 3,
      nombre: "Jorge",
      fecha: "15-11-2021",
      turno: "Mañana",
      descripcion: "Salió del conjunto la vecina del H-20",
    },
    {
      id: 4,
      nombre: "Jorge",
      fecha: "15-11-2021",
      turno: "Mañana",
      descripcion: "Salió del conjunto la vecina del H-20",
    },
  ];


  return (
    <div className="container-page">
      <div className="container-list">
        <div className="date-filter">
          <h1>Minutas registradas</h1>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box m={2}>
              <DatePicker
                inputFormat="yyyy-MM"
                views={["year", "month"]}
                label="Year and Month"
                minDate={new Date("2012-03-01")}
                maxDate={new Date("2023-06-01")}
                value={datePicker}
                onChange={(newValue)=>{
                    setValue(newValue)
                    console.log(newValue)
                }}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </Box>
          </LocalizationProvider>
        </div>

        <ul className="list-minutas">
          {minutasList.map((minuta) => (
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
      </div>
    </div>
  );
}

export default Minutas;
