import React, {Component} from 'react'
import {Link, Redirect, withRouter} from 'react-router-dom'
import Context from "../Components/Context";
import './Styles/SideBar.css';
import { LinkContainer } from 'react-router-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import Divider from '@material-ui/core/Divider';
import ToolBar from '@material-ui/core/Toolbar';
import {Button, Card, CardContent, CardActions, Typography, AppBar} from '@material-ui/core';

function NavBarPage(props) {
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
        <AppBar position="static">
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
        </AppBar>
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