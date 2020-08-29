import React, {Component} from 'react'
import {Link, Redirect, withRouter} from 'react-router-dom'
import Context from "../Components/Context";
import './Styles/SideBar.css';
import { LinkContainer } from 'react-router-bootstrap';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import Divider from '@material-ui/core/Divider';
import ToolBar from '@material-ui/core/Toolbar';
import {Button, Card, CardContent, CardActions, Typography, AppBar} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background:'#D83410'
  },
  avatar:{
    color:'#D83410',
    background:'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
function NavBarPage(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return(
      <>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <ToolBar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.openDrawer}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{flexGrow:1}}>
              HIERRO HEARTH 
            </Typography>
            <IconButton onClick={handleClick}>
              <Avatar className={classes.avatar} style={{padding:"5px"}}>{`${props.user.nombres[0]}${props.user.apellidoPaterno[0]}`}</Avatar>
            </IconButton>
          </ToolBar>
          <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          >
            <Card>
                            <CardContent>
                                <div>
                                    <div>
                                    <Avatar className={classes.avatar}>
                                    {`${props.user.nombres[0]}${props.user.apellidoPaterno[0]}`}
                                    </Avatar>
                                    </div>
                                    <div>
                                        <Typography>{`${props.user.nombres} ${props.user.apellidoPaterno}`}</Typography>
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions >  
                                {/* {/* <Button variant='outlined' className={classes.button} onClick={handleAddAccount} >Agregar Cuenta</Button> */}
                                 {/* {/* <div></div> */}
                                <Button variant='outlined' onClick={props.handleLogout} >Salir</Button>
                            </CardActions>
                        </Card>
          </Popover>
        </AppBar>
        {/* <AppBar position="static">
          <ToolBar>
          <IconButton edge="start"  color="inherit" style={{marginRight:200}}aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{flexGrow:1}}>
            HIERRO HEARTH 
          </Typography>
          <IconButton onClick={handleClick} style={{width:100}}>
          <Avatar style={{padding:"5px"}}>{`${props.user.nombres[0]}${props.user.apellidoPaterno[0]}`}</Avatar>
          </IconButton>
          </ToolBar>
        </AppBar> */}
        {/* <nav class="navbar navbar-dark fixed-top btn-danger flex-md-nowrap p-0 shadow">
          <Link class="navbar-brand col-sm-3 col-md-2 mr-0" to="/dashboard">Hierro hearth</Link>
          <IconButton onClick={handleClick} style={{width:100}}>
          <Avatar style={{padding:"5px"}}>{`${props.user.nombres[0]}${props.user.apellidoPaterno[0]}`}</Avatar>
          </IconButton>
          <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          >
            <Card>
                            <CardContent>
                                <div>
                                    <div>
                                    <Avatar>
                                    {`${props.user.nombres[0]}${props.user.apellidoPaterno[0]}`}
                                    </Avatar>
                                    </div>
                                    <div>
                                        <Typography>{`${props.user.nombres} ${props.user.apellidoPaterno}`}</Typography>
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions >  */}
                                {/* {/* <Button variant='outlined' className={classes.button} onClick={handleAddAccount} >Agregar Cuenta</Button> */}
                                 {/* <div></div>
                                <Button variant='outlined' onClick={props.handleLogout} >Salir</Button>
                            </CardActions>
                        </Card>
          </Popover>
        </nav>  */}
      </>
    )
}

export default withRouter(NavBarPage);