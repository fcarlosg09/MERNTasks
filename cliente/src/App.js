import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Proyectos from './Components/proyectos/Proyectos';
import NuevaCuenta from './Components/auth/NuevaCuenta';
import Login from './Components/auth/Login';
import ProyectoState from './Context/Proyectos/proyectoState';

function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
      </Router>
    </ProyectoState>
  );
}

export default App;
