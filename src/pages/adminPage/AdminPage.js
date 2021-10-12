import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Administracion from "../../components/administracion/Administracion";
import Minutas from "../../components/minutas/Minutas";
import Registrar from "../../components/registrarMinuta/Registrar";
import Navbar from "../../components/sidebar/Navbar";

export const AdminPage = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={["/admin","/registrar"]} exact component={Registrar}/>
          <Route path="/minutas" component={Minutas}/>
          <Route path="/administracion" exact component={Administracion}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};
