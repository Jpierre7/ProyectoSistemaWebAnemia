import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/SideBar.css'
function Sidebar(props) {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/manFamiliar" className="nav-link">
                            <span data-feather="file"></span>
                      Familiares
                    </Link>

                    </li>

                    <li className="nav-item">
                        <Link to="/manAlimento" className="nav-link">
                            <span data-feather="shopping-cart"></span>
                      Alimentos
                    </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Dashboard" className="nav-link">
                            <span data-feather="shopping-cart"></span>
                      Usuarios
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Sidebar;