import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/SideBar.css'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PeopleIcon from '@material-ui/icons/People';
import KitchenIcon from '@material-ui/icons/Kitchen';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import Imagen from '../Views/Login/Image/logoHierroHearth.png';
import ListItemText from '@material-ui/core/ListItemText';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        background:'orange'
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    root: {
        display: 'flex',
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth,
      },
      color:{
        background: 'red',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
  }));
function Sidebar(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const opciones=(
      <div>
            <div className={classes.toolbar}/>
            <Divider />
                        <ListSubheader inset style={{fontWeight:'bold'}}>MANTENEDORES</ListSubheader>
                        <Link to="/manFamiliar" style={{textDecoration:'none', color:'black'}}>
                            {/* <span data-feather="file"></span> */}
                            <ListItem 
                        button>
                        <ListItemIcon>
                        <PeopleOutlineIcon /> 
                        </ListItemIcon>
                        <ListItemText primary="Familiares" />
                    </ListItem>
                    </Link>
              
            {/* </List> */}
            {/* <li > */}

                    {/* </li> */}
                        <Link to="/manAlimento"style={{textDecoration:'none', color:'black'}}>
                        <ListItem button>
                          <ListItemIcon>
                            <KitchenIcon/>
                          </ListItemIcon>
                          <ListItemText primary="Alimentos"/>
                        </ListItem>
                        </Link>
                        
                        <Link to="/Dashboard" style={{textDecoration:'none', color:'black'}}>
                        <ListItem button>
                          <ListItemIcon>
                            <PeopleIcon/>
                          </ListItemIcon>
                          <ListItemText primary="Usuarios"/>
                        </ListItem>
                        </Link>

                        <Divider/>
            </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            // container={container}
            // variant="temporary"
            // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.open}
            onClose={props.openDrawer}
            // classes={{
            //   paper: classes.drawerPaper,
            // }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {opciones}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {opciones}
          </Drawer>
        </Hidden>
      </nav>
        // <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        //     <div className="sidebar-sticky">
        //         <ul className="nav flex-column">
        //             <li className="nav-item">
        //                 <Link to="/manFamiliar" className="nav-link">
        //                     <span data-feather="file"></span>
        //               Familiares
        //             </Link>

        //             </li>

        //             <li className="nav-item">
        //                 <Link to="/manAlimento" className="nav-link">
        //                     <span data-feather="shopping-cart"></span>
        //               Alimentos
        //             </Link>
        //             </li>

        //             <li className="nav-item">
        //                 <Link to="/Dashboard" className="nav-link">
        //                     <span data-feather="shopping-cart"></span>
        //               Usuarios
        //             </Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>

    )
}
Sidebar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
export default Sidebar;