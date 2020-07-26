import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Context from "../../Components/Context";
import NavBarPage from '../../Components/NavBarPage';
import Sidebar from '../../Components/Sidebar'
import ResponsiveDrawer from '../../Components/ejemplo';
import { withStyles, useTheme } from '@material-ui/core/styles';
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
      {/* <div style={{display:'flex'}}> */}
        <NavBarPage handleLogout={this.handleLogout} user={user} openDrawer={this.openDrawer}/>
        
        <Sidebar open={this.state.open} openDrawer={this.openDrawer}/>
        {/* <main className={classes.content} >
        <div className={classes.toolbar} />
        {this.props.children}
      </main> */}
        {/* <ResponsiveDrawer/> */}
        {/* <NavBarPage handleLogout={this.handleLogout} user={user}/> */}
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              {this.props.children}
            </main>
          </div>
        </div>
        {/* </div> */}
      </>
    )
  }
}

export default withStyles(useStyles)(Dashboard);