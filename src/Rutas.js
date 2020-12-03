import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Views/Login/Login'
import Dashboard from './Views/Menu/Dashboard'
import Man_Familiar from './Views/Mantenedores/Man_Familiar'
// import Man_Alimento from './Views/Mantenedores/Man_Alimento'
import ManTest from './Views/Mantenedores/ManTest'
import MaterialTableDemo from './Components/listpruebita'

import Ejemplo from './Views/Ejemplo'

class Rutas extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/manAlimento" component={ManTest} /> */}
          <Dashboard>
            <Switch>
              {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          {/* <Route exact path="/ejemplo" component={Ejemplo}/> */}
              <Route exact path="/manFamiliar" component={Man_Familiar} />
              {/* <Route exact path="/manAlimento" component={Man_Alimento} /> */}
              <Route exact path="/manAlimento" component={ManTest} />
              <Route exact path="/listPruebita" component={MaterialTableDemo} />
            </Switch>
          </Dashboard>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Rutas