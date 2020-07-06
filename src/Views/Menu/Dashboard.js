import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Context from "../../Components/Context";
import NavBarPage from '../../Components/NavBarPage';
import Sidebar from '../../Components/Sidebar'

class Dashboard extends Component {
  static contextType = Context;

  handleLogout = () => {
    this.context.logout();
  
  }

  render() {

    const { user, autenticado } = this.context


    if (!autenticado) return <Redirect to="/" />

    return (
      <>
        <NavBarPage handleLogout={this.handleLogout} user={user}/>
        <div className="container-fluid">
          <div className="row">
            <Sidebar/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              {this.props.children}
            </main>
          </div>
        </div>
      </>
    )
  }
}

export default Dashboard;