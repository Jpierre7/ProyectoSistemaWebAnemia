import React, { Component } from 'react';
import Rutas from './Rutas';
import Context from "./Components/Context";

class App extends Component {
  state = {
    autenticado: false,
    user: {}
  }

  login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    this.setState(() => ({ autenticado: true, user: user }));
  }

  logout = () => {
    localStorage.removeItem("user");
    this.setState(() => ({ autenticado: false, user: {} }));
  }
  
  render(){
    const ctx = { ...this.state, login: this.login, logout: this.logout };
    return (
      <Context.Provider value={ctx}>
        <Rutas/>
      </Context.Provider>
    );
  }
}

export default App;
