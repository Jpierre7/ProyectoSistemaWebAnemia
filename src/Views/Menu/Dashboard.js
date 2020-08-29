import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Context from "../../Components/Context";
import NavBarPage from '../../Components/NavBarPage';
import Sidebar from '../../Components/Sidebar'
import { withStyles, useTheme } from '@material-ui/core/styles';
import ManTest from '../Mantenedores/ManTest'
import './Layout.css'
import {Container} from '@material-ui/core'
const useStyles = theme => ({
  root: {
    display: 'flex',
  },
toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});
class Dashboard extends Component {
  state = {
    open: false
  }
  static contextType = Context;
  openDrawer = () => {
    this.setState({
      open: !this.state.open
    })
    console.log('cerro');
  }
  handleLogout = () => {
    this.context.logout();

  }

  render() {
    const classes = this.props;
    const { user, autenticado } = this.context


    if (!autenticado) return <Redirect to="/" />

    return (
      <>
      <div className="root">
        <NavBarPage handleLogout={this.handleLogout} user={user} openDrawer={this.openDrawer}/>
        
        <Sidebar open={this.state.open} openDrawer={this.openDrawer}/>
        {/* <main className={classes.content} >
        <div className={classes.toolbar} />
        {this.props.children}
      </main> */}
        {/* <ResponsiveDrawer/> */}
        {/* <NavBarPage handleLogout={this.handleLogout} user={user}/> */}
        <main className="content">
          <div className="toolbar">
          <Container maxWidth="lg" className="container">
            {this.props.children}

          </Container>

          </div>
        </main>
        </div>
      </>
    )
  }
}

export default withStyles(useStyles)(Dashboard);