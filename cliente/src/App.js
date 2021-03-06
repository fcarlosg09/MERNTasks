import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Proyectos from './Components/proyectos/Proyectos';
import NuevaCuenta from './Components/auth/NuevaCuenta';
import Login from './Components/auth/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
        <Route exact path="/proyectos" component={Proyectos} />
      </Switch>
    </Router>
  );
}

export default App;
